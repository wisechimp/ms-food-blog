import React, { useState, useEffect } from "react"

import Layout from "../components/Layout"
import CommentCard from "../components/comments/CommentCard"

const Dashboard = () => {
  const [noModerationRequired, setNoModerationRequired] = useState(true)
  const [userComments, setUserComments] = useState(null)

  useEffect(() => {
    fetch("https://ms-food-blog.herokuapp.com/comments")
      .then(response => response.json())
      .then(comment => {
        setUserComments(comment)
      })
      .then(() => {
        if (userComments.length >= 1) {
          setNoModerationRequired(false)
        }
      })
      .then(console.log(userComments))
  }, [])

  return (
    <div>
      <Layout title="Admin Dashboard" />
      noModerationRequired ?
      <p>
        There are currently no comments requiring moderation. Well done!
      </p>:{" "}
      {userComments.map(comment => {
        return (
          <CommentCard
            key={comment.id}
            commentUserName={comment.userName}
            commentDate={comment.date}
            commentText={comment.text}
          />
        )
      })}
    </div>
  )
}

export default Dashboard
