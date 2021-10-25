import React from "react"
import moment from 'moment'

import * as commentStyles from "./commentcard.module.css"

const CommentCard = ({ commentUserName, commentText, commentDate }) => {
  const parsedDate = moment(commentDate).format('DD/MM/YYYY')

  return (
    <div className={commentStyles.container}>
      <div className={commentStyles.head}>
        <p>{commentUserName}</p>
        <p>{parsedDate}</p>
      </div>
      <div className={commentStyles.comment}>
        <p>{commentText}</p>
      </div>
    </div>
)}

export default CommentCard
