import React, { useState, useEffect } from "react"

import Layout from "../Layout"
import CommentCard from "../comments/CommentCard"

const Dashboard = () => {
  const [userComments, setUserComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then(response => response.json())
      .then(comment => {
        setUserComments(comment)
      })
      .then(console.log(userComments))
  }, [])

  return (
    <div>
      <Layout title="Admin Dashboard" />
      {!userComments.length
      ? <p>There are currently no comments requiring moderation. Well done!</p>
      : <div>{userComments.map(comment => {
        return (
          <CommentCard
            key={comment.id}
            commentUserName={comment.username}
            commentDate={comment.date}
            commentText={comment.text}
          />
        )
      })}</div>
      }
    </div>
  )
}

export default Dashboard
