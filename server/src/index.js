import express from 'express'
import consign from 'consign'

const app = express()

consign({ cwd: __dirname })
  .include('libs/settings.js')
  .then('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)

app.get('*', (req, res) => res.json({ 'message': 'Url not valid' }))
