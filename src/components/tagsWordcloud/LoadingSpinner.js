import React from "react"

import * as styles from "./tagswordcloud.module.css"

const LoadingSpinner = () => {
  return (
    <div className={styles.tagsWordcloud}>
      <p>The tags are loading...</p>
    </div>
  )
}

export default LoadingSpinner
