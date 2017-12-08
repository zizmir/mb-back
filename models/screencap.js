module.exports = (sequelize, DataTypes) => {

    // DESIGN

    let Screencap = sequelize.define('screencap', {
            path: {
                type: DataTypes.STRING,
                allownull: false,
                required: true,
                validate: {
                    notEmpty: true,
                }
            }

        },
        {
            underscored: true
        })

    Screencap.associate = function (db) {
        db.screencap.belongsTo(db.movie, {
            onDelete: 'CASCADE',
            foreignKey: {
                allownull: false
            }
        });
    }
    return Screencap;
};
