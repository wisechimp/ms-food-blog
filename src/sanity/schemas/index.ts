import { type SchemaTypeDefinition } from "sanity";

import author from "./author";
import blockContent from "./blockContent";
import genericTable from "./genericTable";
import mainImageObject from "./mainImageObject";
import post from "./post";
import tag from "./tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, tag, blockContent, mainImageObject, genericTable],
};
