import React from "react"
import { Link } from "gatsby"

import * as buttonStyles from "./linkbutton.module.css"

const LinkButton = ({ target, text }) => (
  <div className={buttonStyles.button}>
    <Link to={target}>{text}</Link>
  </div>
)

export default LinkButton
