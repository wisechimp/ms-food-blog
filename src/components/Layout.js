import React from "react"

import Header from "./Header"
import Menu from "./menu/Menu"
import SummaryContentBanner from "./summarycontentbanner/SummaryContentBanner"
import menulinks from "../data/menulinks"

const Layout = ({ title, children, tagData }) => (
  <div>
    <Header title={title} />
    <Menu menuLinks={menulinks} />
    <h1>{title}</h1>
    <SummaryContentBanner props={tagData} />
    {children}
  </div>
)

export default Layout
