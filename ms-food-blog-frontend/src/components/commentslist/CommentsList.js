import React, { useState, useEffect } from "react"

import CommentCard from "../commentscard/CommentCard"

const CommentsList = () => {
  const [postComments, setPostComments] = useState([])
  const noComment =
    "There are no comments yet on this post. Signup or Login to join the conversation."

  useEffect(() => {
    console.log("Using effect")
    fetch(
      "http://localhost:3000/comments/" +
        window.location.pathname.replace("/posts/", "")
    )
      .then(response => response.json())
      .then(resultData => {
        setPostComments(resultData)
      })
      .then(console.log(postComments))
      .catch(err => console.log(err))
  }, [])

  return !postComments.length ? (
    <p>{noComment}</p>
  ) : (
    <div>
      {postComments.map(comment => {
        return (
          <CommentCard
            key={comment.id}
            commentUserName={comment.username}
            commentDate={comment.date}
            commentText={comment.text}
          />
        )
      })}
    </div>
  )
}

export default CommentsList
