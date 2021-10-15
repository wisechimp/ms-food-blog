import React, { useState, useEffect } from "react"

const Dashboard = () => {
  const [userComments, setUserComments] = useState("")

  useEffect(() => {
    fetch("https://ms-food-blog.herokuapp.com/comments")
      .then(response => response.json())
      .then(comment => {
        setUserComments(comment)
      })
      .then(console.log(userComments))
  }, [])
  return <h1>Admin Dashboard!</h1>
}

export default Dashboard
