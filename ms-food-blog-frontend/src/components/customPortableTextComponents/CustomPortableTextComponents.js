import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"

import HorizontalTable from "./HorizontalTable"
import projectConfig from "../../../project-config"

const CustomPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageData = getGatsbyImageData(
        value?.asset?._id,
        { width: 1024 },
        projectConfig.sanity
      )
      return <GatsbyImage image={imageData} alt={value.altText} />
    },
    genericTable: ({ value }) => {
      const genericTable = value?.rows
      return <HorizontalTable data={genericTable} />
    },
  },
}

export default CustomPortableTextComponents
