module.exports = app => {
    console.log('+ [Loading Global Settings]')
    app.set('appName', 'Siziksu SQLite Server')
    app.set('json spaces', 2)
    app.set('port', 80)
}
