# Bulk import your products into Sanity

This uploads all 45 remaining products (with their real photos) into
Sanity automatically -- no manual form-filling.

## 1. Copy this folder into your shop-app project
Put the whole `sanity-import` folder inside your `shop-app` folder, so it
sits next to `app`, `lib`, `public`, etc. This matters -- the script finds
your product images relative to this location.

## 2. Install the Sanity client library
Open a terminal INSIDE your shop-app folder and run:
```
npm install @sanity/client
```

## 3. Set your API token for this terminal session
Using the token you copied from Sanity's API settings, run (PowerShell):
```
$env:SANITY_API_TOKEN="paste-your-token-here"
```
This only lasts for the current terminal window -- if you close it, you'll
need to set it again before re-running the script.

## 4. Run the import
Still in the same terminal:
```
node sanity-import/import-products.js
```
You'll see it upload each product one by one, with its images. This takes
a few minutes since it's uploading 45 products' worth of photos.

## 5. Check your Sanity Studio
Go to localhost:3333 (or your deployed Studio URL) -- all 45 products
should now be listed under "Product", each with its photo, description,
category, tags, and material already filled in.

## 6. Fill in real prices
Every imported product has price set to 0 as a placeholder (I don't know
your real prices). Click into each product in Sanity Studio and update
the Price field with your actual number, then click Publish.

## Troubleshooting
- "Cannot find module '@sanity/client'" -> you skipped step 2, run npm install again
- "SANITY_API_TOKEN environment variable not set" -> you skipped step 3, or closed/reopened the terminal since setting it
- "WARNING: image not found" for a product -> that image file wasn't in your public/products folder; the product still gets created, just without a photo -- you can add one manually in Studio
