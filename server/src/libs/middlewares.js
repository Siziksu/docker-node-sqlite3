import express from 'express'
import morgan from 'morgan'
import path from 'path'

module.exports = app => {
    console.log('+ [Loading Middlewares]')
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static(path.join(app.get('dir'), 'assets')))
    app.set('views', path.join(app.get('dir'), 'views'))
    app.set('view engine', 'ejs')
    app.use((req, res, next) => {
        req.requestTime = Date.now()
        req.requestDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        console.log(`\x1b[32m${req.method} \x1b[33m${req.originalUrl} \x1b[35m${req.requestDate}`)
        next()
    })
    app.locals.base_url = app.get('dev') ? 'http://localhost:8080' : 'https://siziksu.serveo.net'
}
