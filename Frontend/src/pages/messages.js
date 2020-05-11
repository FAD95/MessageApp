import React, { useState, useEffect } from "react"
import request from "../network/request"

const Messages = ({ location }) => {
  const { state = {} } = location
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    let list = []
    const getMessages = async () => {
      await request(`http://localhost:3000/message?chat=${state._id}`)
        .then(res => {
          list = res
        })
        .catch(e => {
          console.error(e)
        })
    }
    getMessages().then(() => {
      setMessageList(list)
    })
  }, [])

  console.log(messageList)
  return <ul></ul>
}

export default Messages
