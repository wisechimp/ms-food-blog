import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const About = ({ data }) => {
  console.log(data.sanityAuthor)
  const { id, bio } = data.sanityAuthor
  return (
    <Layout title="About Me">
      <div className="bulkText">
        {bio.map(({ children }, i) => {
          console.log(children[0].text)
          return <p key={`${id} + ${i}`}>{children[0].text}</p>
        })}
      </div>
    </Layout>
  )
}

export default About

export const authorQuery = graphql`
  query {
    sanityAuthor(_id: { eq: "284aaa5d-67ef-4caf-976e-0aa62dfa794c" }) {
      id
      bio {
        children {
          text
        }
      }
    }
  }
`
