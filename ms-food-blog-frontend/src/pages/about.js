import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const About = ({ data }) => {
  console.log(data.sanityAuthor)
  return (
    <Layout title="About Me">
      <div className="bulkText">
        {data.sanityAuthor.bio.map(({ children }, i) => {
          console.log(children[0].text)
          return <p key={i}>{children[0].text}</p>
        })}
      </div>
    </Layout>
  )
}

export default About

export const authorQuery = graphql`
  query {
    sanityAuthor(_id: { eq: "284aaa5d-67ef-4caf-976e-0aa62dfa794c" }) {
      bio {
        children {
          text
        }
      }
    }
  }
`
