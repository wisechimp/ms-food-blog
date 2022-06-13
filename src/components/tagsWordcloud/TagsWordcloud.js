import React from "react"
import WordCloud from "react-d3-cloud"
import { navigate } from "gatsby"

import * as styles from "./tagswordcloud.module.css"

const TagsWordcloud = ({ data, height, width }) => {
  console.log(data)

  return (
    <div>
      <div className={styles.tagsWordcloud}>
        <WordCloud
          data={data}
          height={height}
          width={width}
          fontSize={word => word.value * 20}
          onWordClick={(event, word) => {
            navigate(`/tags/${word.text.replace(/ /g, "-")}/`)
          }}
        />
      </div>
    </div>
  )
}

export default TagsWordcloud
