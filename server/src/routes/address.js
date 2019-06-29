module.exports = app => {
    const Address = app.db.models.address

    app.get('/address', async (req, res) => {
        await Address.findAll()
            .then(result => res.json(result))
            .catch(error => res.status(500).json({ 'error': error.message }))
    })

    app.route('/address/:id')
        .get(async (req, res) => {
            const id = req.params.id
            await Address.findOne({ where: { id: id } })
                .then(address => {
                    if (address) {
                        res.json({ address })
                    } else {
                        res.status(404).json({ 'error': `Address not found` })
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))
        })
        .delete(async (req, res) => {
            const id = req.params.id
            await Address.destroy({ where: { id: id } })
                .then(result => {
                    if (result == 1) {
                        res.json({ 'success': 'Address deleted' })
                    } else {
                        res.status(404).json({ 'error': 'Address not found' })
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))
        })
        .put(async (req, res) => {
            const id = req.params.id
            await Address.update(req.body, { where: { id: id } })
                .then(result => {
                    if (result == 1) {
                        res.json({ 'success': 'Address updated' })
                    } else {
                        res.status(404).json({ 'error': 'Address not found' })
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))
        })
        .post(async (req, res) => {
            const userId = req.params.id
            await Address.findOne({ where: { userId: userId } })
                .then(result => {
                    if (!result) {
                        Address.create({ name: req.body.name, cp: req.body.cp, userId: userId })
                            .then(result => { res.json(result) })
                            .catch(error => res.status(500).json({ 'error': error.message }))
                    } else {
                        res.status(404).json({ 'error': 'Address already exists' })
                    }
                })
                .catch(error => res.status(500).json({ 'error': error.message }))

        })
}
