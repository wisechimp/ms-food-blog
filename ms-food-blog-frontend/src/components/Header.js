import React from "react"
import { Helmet } from "react-helmet"

const Header = ({ title }) => (
  <Helmet 
    htmlAttributes={{
      lang:'en'
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: 'Ma Sharp\'s healthy home cooking blog.'
      },
      {
        name: 'keywords',
        content: 'Healthy, home cooking, garden'
      }
    ]}
  />
)

export default Header
