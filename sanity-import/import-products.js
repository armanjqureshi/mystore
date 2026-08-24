// Bulk-imports all products from products-data.json into Sanity,
// uploading each product's images and creating the product document.
//
// Run this from INSIDE your shop-app folder (so the image paths resolve
// correctly), with this script and products-data.json copied in alongside
// your other files -- e.g. shop-app/sanity-import/import-products.js

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const PROJECT_ID = 'j6ektfsx';
const DATASET = 'production';

const token = process.env.SANITY_API_TOKEN;
if (!token) {
  console.error('ERROR: SANITY_API_TOKEN environment variable not set.');
  console.error('Run: $env:SANITY_API_TOKEN="your-token-here"  (PowerShell)');
  console.error('Then run this script again in the SAME terminal window.');
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const dataPath = path.join(__dirname, 'products-data.json');
const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// shop-app root is two levels up from this script (shop-app/sanity-import/)
const shopAppRoot = path.join(__dirname, '..');

async function uploadImage(relativeImagePath) {
  const fullPath = path.join(shopAppRoot, relativeImagePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`  WARNING: image not found, skipping: ${fullPath}`);
    return null;
  }
  const buffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(fullPath),
  });
  return asset;
}

async function run() {
  console.log(`Importing ${products.length} products into Sanity...\n`);

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    console.log(`[${i + 1}/${products.length}] ${p.name}`);

    const imageBlocks = [];
    for (const imgPath of p.imagePaths) {
      const asset = await uploadImage(imgPath);
      if (asset) {
        imageBlocks.push({
          _type: 'image',
          _key: Math.random().toString(36).slice(2),
          asset: { _type: 'reference', _ref: asset._id },
        });
      }
    }

    const doc = {
      _type: 'product',
      name: p.name,
      category: p.category,
      price: p.price,
      images: imageBlocks,
      description: p.description,
      inStock: p.inStock,
      tags: p.tags,
      material: p.material,
    };

    try {
      const created = await client.create(doc);
      console.log(`  -> created (id: ${created._id})\n`);
    } catch (err) {
      console.error(`  -> FAILED: ${err.message}\n`);
    }
  }

  console.log('Done! Check your Sanity Studio -- all products should be there.');
  console.log('NOTE: prices imported as 0 (placeholder) -- edit each product in Studio to set real prices.');
}

run();
