import React, { useState, useEffect } from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

import Layout from "../components/Layout"
import CommentCard from "../components/commentscard/CommentCard"

const Dashboard = () => {
  const [userComments, setUserComments] = useState([])
  const { user } = useAuth0()

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
      <p>Hi {user.nickname}!</p>
      {!userComments.length ? (
        <p>There are currently no comments requiring moderation. Well done!</p>
      ) : (
        <div>
          {userComments.map(comment => {
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
      )}
    </div>
  )
}

export default withAuthenticationRequired(Dashboard)
