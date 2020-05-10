const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content-Type',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '404': 'Not Found',
  '500': 'Internal Server Error',
}

exports.success = function (req, res, message, status) {
  let statusCode = status
  let statusMessage = message
  if (!status) {
    status = 200
  }
  if (!message) {
    statusMessage = statusMessages[status]
  }
  res.status(statusCode).send({
    error: '',
    body: statusMessage,
  })
}

exports.error = function (req, res, message, status) {
  let statusCode = status
  let statusMessage = message
  if (!status) {
    status = 200
  }
  if (!message) {
    statusMessage = statusMessages[status]
  }
  res.status(statusCode).send({
    error: statusCode,
    body: '',
  })
}
