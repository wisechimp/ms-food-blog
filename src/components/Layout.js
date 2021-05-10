import React from "react"

import Header from "./Header"
import Menu from "./menu/Menu"
import menulinks from "../data/menulinks"

const Layout = ({ title, children }) => (
  <div>
    <Header title={title} />
    <Menu menuLinks={menulinks} />
    <h1>{title}</h1>
    {children}
  </div>
)

export default Layout
