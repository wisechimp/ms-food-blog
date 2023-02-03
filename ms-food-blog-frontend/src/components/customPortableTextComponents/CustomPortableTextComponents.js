import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"

const sanityConfig = {
  projectId: process.env.GATSBY_APP_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_APP_SANITY_DATASET,
}

const CustomPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageData = getGatsbyImageData(
        value?.asset?._id,
        { width: 1024 },
        sanityConfig
      )
      return <GatsbyImage image={imageData} alt="Yak yak" />
    },
  },
}

export default CustomPortableTextComponents
