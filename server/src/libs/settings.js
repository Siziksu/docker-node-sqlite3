import path from 'path'

module.exports = app => {
    console.log('+ [Loading Global Settings]')
    app.set('appName', 'Siziksu SQLite User Server')
    app.set('json spaces', 2)
    app.set('port', 80)
    app.set('views', path.join(app.get('dir'), 'views'))
    app.set('view engine', 'ejs')
}
