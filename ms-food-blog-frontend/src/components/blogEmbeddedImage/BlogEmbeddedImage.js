import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./blogembeddedimage.module.css"

const BlogEmbeddedImage = ({ alt, localImages }) => {
  return (
    <GatsbyImage
      className={styles.embeddedBlogpostImage}
      alt={alt}
      image={getImage(localImages)}
    />
  )
}

export default BlogEmbeddedImage
