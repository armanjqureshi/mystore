"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import product from "./sanity/schemas/product";

export default defineConfig({
  name: "default",
  title: "The Great Dahanu Shop",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  // Studio will live at yoursite.com/studio
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: [product],
  },
});
