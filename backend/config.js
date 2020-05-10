const config = {
  dbUrl:
    process.env.DB_URL ||
    'mongodb+srv://Fad:UEXjZMa844bbDQ2G@cluster0-dwoa7.gcp.mongodb.net/test?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/',
  filesRoute: process.env.FILES_ROUTE || 'files',
}

module.exports = config
