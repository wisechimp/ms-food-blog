import { type SchemaTypeDefinition } from "sanity";

import author from "./author";
import blockContent from "./block-content";
import genericTable from "./generic-table";
import mainImageObject from "./main-image-object";
import post from "./post";
import tag from "./tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, tag, blockContent, mainImageObject, genericTable],
};
