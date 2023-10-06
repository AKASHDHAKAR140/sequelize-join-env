const { DataTypes } = require("sequelize")


function model1(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING  },
    };
    const options = {
        //timestamps: true,
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define("Model1", attributes, options);
}
module.exports = model1;
