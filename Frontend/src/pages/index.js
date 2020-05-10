import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [list, setList] = useState([])
  let UsersList = []
  useEffect(() => {
    getUsers().then(() => {
      setList(UsersList.data.body)
    })
  }, [])
  const reqUsers = () => {
    try {
      return axios.get("http://localhost:3000/user")
    } catch (e) {
      console.error(e)
    }
  }

  const getUsers = async () => {
    await reqUsers()
      .then(res => {
        UsersList = res
      })
      .catch(e => {
        console.error(e)
      })
  }

  return (
    <Layout>
      <SEO title="Home" />

      <h1>Hi people</h1>
      {list.map(user => {
        return <h1 key={user._id}>{user.name}</h1>
      })}
      <h2></h2>

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
