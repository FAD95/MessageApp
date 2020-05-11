import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import request from "../network/request"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    let list = []
    const getUsers = async () => {
      await request("http://localhost:3000/user")
        .then(res => {
          list = res.data.body
        })
        .catch(e => {
          console.error(e)
        })
    }
    getUsers().then(() => {
      setUserList(list)
    })
  }, [])
  return (
    <Layout>
      <SEO title="Home" />

      <h1>Hi people</h1>
      <ul>
        {userList.map(user => {
          return (
            <li key={user._id}>
              <Link to={"/chat"} state={user}>
                {user.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
