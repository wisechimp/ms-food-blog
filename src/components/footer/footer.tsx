import Link from "next/link";

import { FaInstagram } from "react-icons/fa";

import * as styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.footerSocial}>
      <Link
        href="https://www.instagram.com/masharphomecooking"
        aria-label="Instagram"
      >
        <FaInstagram />
      </Link>
    </div>
    <div className={styles.footerAcknowledgement}>
      This is a Wise Chimp website
    </div>
  </div>
);

export default Footer;
