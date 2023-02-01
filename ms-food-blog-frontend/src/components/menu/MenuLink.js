import React from 'react'
import { Link } from 'gatsby'

const MenuLink = ({ to, linkText }) => (
    <Link to={to}>{linkText}</Link>
)

export default MenuLink