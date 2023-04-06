async function main() {

  const express = require('express')
  const app = express()
  
  require('dotenv').config()
  
  const bodyParser = require('body-parser')
  app.use(bodyParser.json())

  // Database and Auth Database
  const database = require('./database')
  const auth_db = await database.openOrCreateDB('./auth/db.sqlite')
  const initial = require('./database/initial')
  await initial.createInitialTables(auth_db)
  await initial.createInitialRows(auth_db)
  // end Database and Auth Database

  // Auth Module
  const auth = require('./auth')
  await auth.config(app, auth_db)
  app.use(auth.router)
  // end Auth Module

  // Serving frontend
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'dist')))
  // end Serving frontend

  // Fallback
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
  })

  var history = require('connect-history-api-fallback')
  app.use(history())
  // end Fallback

  app.listen(process.env.PORT, () => {
    console.log('Express app listening on port', process.env.PORT)
  })

}
main()