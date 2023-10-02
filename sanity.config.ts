import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { table } from '@sanity/table'
import schemas from "@/sanity/schemas"

const config = defineConfig({
  title: "Ma Sharp Home Cooking",
  projectId: "z4j35np0",
  dataset: "production",
  apiVersion: "2023-10-02",
  basePath: "/studio",
  plugins: [
    deskTool(),
    table()],
  schema: {
    types: schemas,
  },
})

export default config