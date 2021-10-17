import React from "react"

const CommentCard = ({ commentUserName, commentText, commentDate }) => (
  <div>
    <p>{commentUserName}</p>
    <p>{commentDate}</p>
    <p>{commentText}</p>
  </div>
)

export default CommentCard
