// Paste this into your Sanity Studio project (schemaTypes/product.js)
// once you've created your free Sanity project. See README.md.

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Crockery", value: "crockery" },
          { title: "Gifts", value: "gifts" },
          { title: "Toys", value: "toys" },
          { title: "Home Items", value: "home" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price (₹)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "material",
      title: "Material",
      type: "string",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "images.0" },
  },
};
