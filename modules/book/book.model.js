const { DataTypes } = require("sequelize")


function model(sequelize) {
    const attributes = {
        Model1Id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
    };
    const options = {
        // timestamps: true,
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define("Model", attributes, options);
}
module.exports = model;
