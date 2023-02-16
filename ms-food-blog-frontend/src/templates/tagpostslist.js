import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import BlogPostCard from "../components/blogpostcard/BlogPostCard"
import * as styles from "./tagpostslist.module.css"

const TagsPostTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allSanityPost
  const { description } = data.sanityTag
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout title={tagHeader}>
      <div className={styles.tagDescriptionParagraph}>
        <p>{description}</p>
      </div>
      {edges.map(({ node }) => {
        const {
          id,
          title,
          excerpt,
          slug,
          author,
          mainImageData,
          publishedAt,
        } = node
        const { altText, mainImage } = mainImageData
        const imageData = getImage(mainImage.asset)
        return (
          <BlogPostCard
            key={id}
            title={title}
            author={author.name}
            date={publishedAt}
            slug={slug.current}
            imageSrc={imageData}
            imageAltText={altText}
          >
            {excerpt}
          </BlogPostCard>
        )
      })}
    </Layout>
  )
}

export default TagsPostTemplate

export const tagsQuery = graphql`
  query($tag: String) {
    allSanityPost(
      limit: 2000
      sort: { fields: [publishedAt], order: DESC }
      filter: { tags: { elemMatch: { title: { in: [$tag] } } } }
    ) {
      totalCount
      edges {
        node {
          title
          slug {
            current
          }
          author {
            name
          }
          publishedAt(formatString: "Do MMMM YYYY")
          mainImageData {
            altText
            mainImage {
              asset {
                gatsbyImageData(height: 80, backgroundColor: "#00000000")
              }
            }
          }
          id
          excerpt
        }
      }
    }
    sanityTag(title: { eq: $tag }) {
      description
    }
  }
`
