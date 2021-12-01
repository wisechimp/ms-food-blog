import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { FaInstagram } from "react-icons/fa"

import * as styles from './footer.module.css'

const Footer = () => (
    <div className={styles.footerContainer}>
      <div className={styles.footerSocial}>
        <OutboundLink href="https://www.instagram.com/masharphomecooking" aria-label="Instagram" >
          <FaInstagram />
        </OutboundLink>
      </div>
      <div className={styles.footerAcknowledgement}>
        This is a Wise Chimp website
      </div>
    </div>
)

export default Footer