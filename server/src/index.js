import express from 'express'
import consign from 'consign'
import path from 'path'

const app = express()
app.set('dir', path.join(__dirname))
app.set('dev', true)

consign({ cwd: __dirname })
  .include('libs/settings.js')
  .then('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app)

app.get('*', (req, res) => res.status(404).json({ 'message': 'Url not found' }))
