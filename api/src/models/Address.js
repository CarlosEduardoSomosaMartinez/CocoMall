const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Address",
        {
            id: {
                type: DataTypes.UUID,
                allowNuull: false,
                primaryKey: true,
            },

            directions: {
                type: DataTypes.STRING,
                allowNuull: false,
            },
        },
        {
            timestamps: false,
            createdAt: false,
        }
    );
};
