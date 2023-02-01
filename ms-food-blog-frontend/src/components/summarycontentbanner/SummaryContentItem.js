import React from "react"
import { Link } from "gatsby"

import * as styles from "./summarycontentitem.module.css"

const SummaryContentItem = ({ tag }) => (
  <div className={styles.tagStyle}>
    <Link to={`/tags/${tag.replace(/ /g, "-")}`}>{tag}</Link>
  </div>
)

export default SummaryContentItem
