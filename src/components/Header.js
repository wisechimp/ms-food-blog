import React from "react"
import { Helmet } from "react-helmet"

const Header = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content="What this blog is all about" />
  </Helmet>
)

export default Header
