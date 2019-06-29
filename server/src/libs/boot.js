module.exports = app => {
    console.log('+ [Booting]')
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => console.log(`Running on internal port: ${app.get('port')}`))
    })
}
