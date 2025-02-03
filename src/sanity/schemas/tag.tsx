import { GrTag } from "react-icons/gr";

const tag = {
  name: "tag",
  title: "Tag",
  type: "document",
  icon: GrTag,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default tag;
