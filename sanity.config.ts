"use client";

import { table } from "@sanity/table";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";

const config = defineConfig({
  title: "Ma Sharp Home Cooking",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    table(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema,
});

export default config;
