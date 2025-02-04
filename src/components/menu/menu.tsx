import menuLinks from "@/src/data/menu-links";

import MenuLink from "./menu-link";
import * as styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      {menuLinks.map((menuLink) => {
        return (
          <MenuLink
            key={menuLink.key}
            to={menuLink.to}
            linkText={menuLink.linktext}
          />
        );
      })}
    </div>
  );
};

export default Menu;
