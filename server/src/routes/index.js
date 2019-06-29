module.exports = app => {
    app.get('/', (req, res) => res.json({ 'message': app.get('appName') }))
}