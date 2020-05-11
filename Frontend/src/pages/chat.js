import React, { useEffect, useState } from "react"
import request from "../network/request"
import { Link } from "gatsby"

const Chat = ({ location }) => {
  const { state = {} } = location
  const [chatList, setChatList] = useState([])

  useEffect(() => {
    let list = []
    const getChats = async () => {
      await request(`http://localhost:3000/chat/${state._id}`)
        .then(res => {
          list = res.data.body
        })
        .catch(e => {
          console.error(e)
        })
    }
    getChats().then(() => {
      setChatList(list)
    })
  }, [])

  return (
    <>
      <h1>Hola {state.name}</h1>
      <ul>
        {chatList.map(chat => (
          <li key={chat._id}>
            <h3>
              <Link to={"/messages"} state={chat}>
                {chat.name}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Chat
