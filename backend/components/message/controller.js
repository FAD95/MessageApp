const store = require('./store')
const socket = require('../../socket').socket
const { host, port, publicRoute, filesRoute } = require('../../config')

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay usuario o mensaje o chat')
      return reject('Los datos son incorrectos')
    }

    let fileUrl = ''
    if (file) {
      fileUrl =
        host + ':' + port + publicRoute + filesRoute + '/' + file.filename
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    }

    store.add(fullMessage)
    socket.io.emit('message', fullMessage)
    resolve(fullMessage)
  })
}

function getMessages(chat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(chat))
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data')
      return false
    }
    const result = await store.updateText(id, message)
    resolve(result)
  })
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido')
      return false
    }
    store
      .remove(id)
      .then(() => resolve())
      .catch((e) => {
        reject(e)
      })
  })
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}
