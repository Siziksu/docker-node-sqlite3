import Sequelize from 'sequelize'

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('user', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: { notEmpty: true }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        age: {
            type: DataType.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
            timestamps: false
        })
    User.associate = (models) => {
        User.hasOne(models.address), { foreignKey: 'userId' }
    }
    return User
}
