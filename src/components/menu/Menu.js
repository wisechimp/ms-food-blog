import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { FaInstagram } from 'react-icons/fa'

import MenuLink from "./MenuLink"
import { menuContainer } from "./menu.module.css"

const Menu = ({ menuLinks }) => {
  return (
    <div className={menuContainer}>
      {menuLinks.map(menuLink => {
        return (
          <MenuLink
            key={menuLink.key}
            to={menuLink.to}
            linkText={menuLink.linktext}
          />
        )
      })}
      <OutboundLink href="https://www.instagram.com/masharphomecooking"><FaInstagram /></OutboundLink>
    </div>
  )
}

export default Menu
