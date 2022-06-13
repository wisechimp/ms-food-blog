import React from "react"

import * as styles from "./tagswordcloud.module.css"

const LoadingSpinner = () => {
  return (
    <div className={styles.tagsWordcloud}>
      <div className={styles.tagsWordcloudLoading}>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
