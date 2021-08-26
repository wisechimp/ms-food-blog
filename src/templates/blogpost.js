import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const Blogpost = ({ data }) => {
    const { frontmatter, body } = data.mdx
    const image = getImage(frontmatter.imageSrc)
    return (
        <Layout title={frontmatter.title}>
            <GatsbyImage image={image} alt="Yak yak" />
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}

export default Blogpost

export const query = graphql`
    query PostsById($id: String!) {
        mdx(
            id: { eq: $id }
        ) {
            body
            frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
                imageSrc {
                    childImageSharp {
                        gatsbyImageData(
                            width: 400
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    }`