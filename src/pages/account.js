import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

const Home = () => <p>Home</p>
const Dashboard = () => <p>Dash!</p>
const UserDetails = () => <p>User Details</p>

const Account = () => (
  <>
    <nav>
      <Link to="/account">Home</Link>{" "}
      <Link to="/account/dashboard">Dashboard</Link>{" "}
      <Link to="/account/userdetails">User Details</Link>{" "}
    </nav>
    <Router>
      <Home path="/account" />
      <Dashboard path="/account/dashboard" />
      <UserDetails path="/account/userdetails" />
    </Router>
  </>
)

export default Account
