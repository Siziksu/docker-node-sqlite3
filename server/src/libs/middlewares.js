import express from 'express'
import morgan from 'morgan'

module.exports = app => {
    console.log('+ [Loading Middlewares]')
    app.use(morgan('dev'))
    app.use(express.json());
    app.use((req, res, next) => { next() })
}
