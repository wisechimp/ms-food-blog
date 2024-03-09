import React from "react"

import SummaryContentItem from "./SummaryContentItem"
import * as styles from "./summarycontentbanner.module.css"

const SummaryContentBanner = ({ tags }) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag, i) => {
        return <SummaryContentItem key={i} tag={tag.title} />
      })}
    </div>
  )
}

export default SummaryContentBanner
