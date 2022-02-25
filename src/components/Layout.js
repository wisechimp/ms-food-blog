import React from "react"

import Header from "./Header"
import Menu from "./menu/Menu"
import menulinks from "../data/menulinks"
import Footer from './footer/Footer'

const Layout = ({ title, children, tagData }) => (
  <div>
    <Header title={title} />
    <Menu menuLinks={menulinks} />
    <h1>{title}</h1>
    {children}
    <Footer />
  </div>
)

export default Layout
