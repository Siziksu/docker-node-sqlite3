module.exports = app => {
    console.log('+ [Booting]')
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            const data = { port: app.get('port'), dir: app.get('dir'), views: app.get('views'), base_url: app.locals.base_url }
            console.log(JSON.stringify(data, null, 4))
        })
    })
}
