import React, { useState, useEffect } from "react"

import Layout from "../components/Layout"
import CommentCard from "../components/comments/CommentCard"

const Dashboard = () => {
  const [userComments, setUserComments] = useState([])

  useEffect(() => {
    fetch("https://ms-food-blog.herokuapp.com/comments")
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
            commentUserName={comment.userName}
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
