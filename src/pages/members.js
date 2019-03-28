import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
const SecondPage = () => (
  <Layout>
    <h1>Welcome to the members page</h1>
    <p>Here, we have a list of all the Active Mozillians at Sahyadri</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
