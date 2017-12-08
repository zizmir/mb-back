module.exports = (sequelize, DataTypes) => {

    // DESIGN

    let Movie = sequelize.define('movie', {
            title: {
                type: DataTypes.STRING,
                allownull: false,
                required: true,
                validate: {
                    notEmpty: true,
                }
            }


        })
    ;

    Movie.associate = function (db) {
        db.movie.hasMany(db.screencap);
    }
    return Movie;
}
;
