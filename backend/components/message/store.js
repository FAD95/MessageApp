const Model = require('./model')

function addMessage(message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    if (filterChat === null) {
      reject('No se ha ingresado un Chat')
      return false
    }

    let filter = {}

    filter = {
      chat: filterChat,
    }

    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error)
          return false
        }
        resolve(populated)
      })
  })
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({ _id: id })
  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

function removeMessage(id) {
  console.log(id)

  return Model.deleteOne({
    _id: id,
  })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
}
