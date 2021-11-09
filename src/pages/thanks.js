import React from "react"

import Layout from "../components/Layout"
import * as thanksStyles from "./thanks.module.css"

const Thanks = () => (
  <Layout pageTitle="Thanks!">
    <div className={thanksStyles.thanksContent}>
      <h2>Thank you!</h2>
      <br />
      <p>Thank you for taking the time to contact Ma Sharp!</p>
      <br />
      <p>If required I will try to get back to you as soon as possible.</p>
    </div>
  </Layout>
)

export default Thanks