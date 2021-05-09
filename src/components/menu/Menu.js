import React from 'react'

import MenuLink from './MenuLink'

const Menu = ({ menuLinks }) => {
    return (
        <div>
            {menuLinks.map((menuLink, i) => {
                return (
                    <MenuLink
                        to={menuLinks[i].to}
                        linkText={menuLinks[i].linktext}
                    />
                )
            })}
        </div>
    )
}

export default Menu