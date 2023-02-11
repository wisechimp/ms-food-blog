import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

import Layout from "../components/Layout"
import CustomPortableTextComponents from "../components/customPortableTextComponents/CustomPortableTextComponents"
import FootnotesPortableText from "../components/customPortableTextComponents/FootnotesPortableText"
import SummaryContentBanner from "../components/summarycontentbanner/SummaryContentBanner"
import * as styles from "./blogpost.module.css"

const Blogpost = ({ data }) => {
  const {
    _rawBody,
    title,
    publishedAt,
    author,
    tags,
    mainImageData,
  } = data.sanityPost
  const { mainImage, altText } = mainImageData
  const image = getImage(mainImage.asset)
  console.log(_rawBody)

  return (
    <Layout title={title}>
      <div className={styles.blogpostMetadata}>
        <p>Author: {author.name}</p>
        <p>Posted on: {publishedAt}</p>
      </div>
      <div className={styles.blogpostImage}>
        <GatsbyImage image={image} alt={altText} />
      </div>
      <div className={styles.blogpostBody}>
        <div className={styles.blogpostText}>
          <PortableText
            value={_rawBody}
            components={CustomPortableTextComponents}
          />
          <FootnotesPortableText value={_rawBody} />
        </div>
        <div className={styles.blogpostTagBox}>
          <SummaryContentBanner tags={tags} />
        </div>
      </div>
      <div>{/* <h2>Comments:</h2>
        <CommentsList /> */}</div>
    </Layout>
  )
}

export default Blogpost

export const query = graphql`
  query PostsById($id: String!) {
    sanityPost(id: { eq: $id }) {
      _rawBody(resolveReferences: { maxDepth: 10 })
      title
      publishedAt(formatString: "Do MMMM YYYY")
      author {
        name
      }
      tags {
        title
      }
      mainImageData {
        altText
        mainImage {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
              width: 800
              backgroundColor: "#00000000"
            )
          }
        }
      }
    }
  }
`
