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
    </div>
  )
}

export default Menu
