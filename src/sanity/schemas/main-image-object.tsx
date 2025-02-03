const mainImageObject = {
  name: "mainImageObject",
  title: "Main Image Object",
  type: "object",
  fields: [
    {
      name: "mainImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "altText",
      title: "Alternative text",
      description:
        "This is required for people who rely on screen readers and SEO.",
      type: "string",
    },
  ],
};

export default mainImageObject;
