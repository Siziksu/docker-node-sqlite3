module.exports = app => {
    const User = app.db.models.user
    const Address = app.db.models.address

    app.route('/users')
        .get(async (req, res) => {
            await User.findAll({ include: [{ model: Address, attributes: ['name', 'cp'] }] })
                .then(result => res.json(result))
                .catch(error => res.status(500).json({ 'error': error.message }))
        })
        .post(async (req, res) => {
            await User.create(req.body)
                .then(result => {
                    if (req.body.address != null) {
                        Address.create({ name: req.body.address.name, cp: req.body.address.cp, userId: result.id })
                        User.findOne({ where: { id: result.id }, attributes: ['id', 'name', 'age'], include: [{ all: true }] })
                            .then(result => res.json(result))
                    } else {
                        res.json(result)
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))
        })

    app.route('/users/:id')
        .get(async (req, res) => {
            const id = req.params.id
            await User.findOne({ where: { id: id }, attributes: ['id', 'name', 'age'], include: [{ all: true }] })
                .then(user => {
                    if (user) {
                        res.json({ user })
                    } else {
                        res.status(404).json({ 'error': 'User not found' })
                    }
                })
                .catch(error => res.status(500).end(error.message))
        })
        .delete(async (req, res) => {
            const id = req.params.id
            await User.destroy({ where: { id: id } })
                .then(result => {
                    if (result == 1) {
                        res.json({ 'success': 'User deleted' })
                    } else {
                        res.status(404).json({ 'error': 'User not found' })
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))
        })
        .put(async (req, res) => {
            const id = req.params.id
            await User.update(req.body, { where: { id: id } })
                .then(result => {
                    if (result == 1) {
                        res.json({ 'success': 'User updated' })
                    } else {
                        res.status(404).json({ 'error': 'User not found' })
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))
        })
}
