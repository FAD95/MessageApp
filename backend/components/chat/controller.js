const store = require('./store')

function addChat(users, name) {
  if (!users || !name || !Array.isArray(users)) {
    return Promise.reject('Invalid user list or no name for chat')
  }

  const chat = {
    users: users,
    name: name,
  }
  return store.add(chat)
}

function listChats(userId) {
  return store.list(userId)
}

module.exports = {
  addChat,
  listChats,
}
