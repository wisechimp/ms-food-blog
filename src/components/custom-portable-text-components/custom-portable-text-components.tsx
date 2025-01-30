import { PortableTextComponents } from "next-sanity";

import BlockImage from "./block-image";
import HorizontalTable from "./horizontal-table";

const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <BlockImage
          imageData={props.value}
          imageAltText={props.value?.altText}
        />
      ) : null,
    genericTable: (props) =>
      props.value ? <HorizontalTable data={props.value.row} /> : null,
  },
};

export default components;
