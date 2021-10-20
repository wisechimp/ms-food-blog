import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

import { login, isAuthenticated, getProfile, logout} from '../utils/auth'

const Home = ({ user }) => {
  console.log(user)
  return <p>Hi, {user.nickname ? user.nickname : "friend"}!</p>
}
const Dashboard = () => <p>Dash!</p>
const UserDetails = () => <p>User Details</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
  <>
    <nav>
      <Link to="/account">Home</Link>{" "}
      <Link to="/account/dashboard">Dashboard</Link>{" "}
      <Link to="/account/userdetails">User Details</Link>{" "}
      <a
        href="#logout"
        onClick={e => {
          logout()
          e.preventDefault()
        }}
      >
        Logout
      </a>
    </nav>
    <Router>
      <Home path="/account" user={user}/>
      <Dashboard path="/account/dashboard" />
      <UserDetails path="/account/userdetails" />
    </Router>
  </>
)}

export default Account
