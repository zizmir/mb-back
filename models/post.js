

module.exports = (sequelize, DataTypes) => {

    // DESIGN

    let Post = sequelize.define('post', {
        liked: DataTypes.BOOLEAN,
        loved: DataTypes.BOOLEAN

    })


    return Post;
};

