import { defineField, defineType } from "sanity"

export default defineType({
  name: "mainImageObject",
  title: "Main Image Object",
  type: "object",
  fields: [
    defineField({
      name: "mainImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "altText",
      title: "Alternative text",
      description:
        "This is required for people who rely on screen readers and SEO.",
      type: "string",
    }),
  ],
})
