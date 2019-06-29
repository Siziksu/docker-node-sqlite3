module.exports = (sequelize, DataType) => {
    const Address = sequelize.define('address', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: true,
            defaultValue: ""
        },
        cp: {
            type: DataType.STRING,
            allowNull: true,
            defaultValue: ""
        },
    }, {
            timestamps: false
        })
    Address.associate = (models) => {
        Address.belongsTo(models.user, { foreignKey: 'userId', onDelete: 'CASCADE' })
    }
    return Address
}
