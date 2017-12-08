const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) =>
{

    // DESIGN

    let User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allownull: false,
            required: true,
            validate: {
                notEmpty: true,
            }
        },
        firstname: {
            type: DataTypes.STRING,
            allownull: false,
            required: true,
            validate: {
                notEmpty: true,
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allownull: false,
            required: true,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allownull: false,
            required: true,
            validate: {
                isEmail: true,
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        password: {
            type: DataTypes.STRING,
            allownull: false,
            required: true,
            validate: {
                len: [5, 20],
            }
        },
        password_confirmation: {
            type: DataTypes.VIRTUAL
        },
    }, {
        hooks: {
            beforeCreate: function (user) {
                if (user.password != user.password_confirmation) {
                    throw new Error("Passwords doesn't match!");
                }

                let salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            },
            beforeBulkUpdate: function (user) {
                if (user.password != user.password_confirmation) {
                    throw new Error("Passwords doesn't match!");
                }

                let salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    });

    User.associate = function (db) {
        db.user.belongsToMany(db.screencap, {
            through: db.post
        })
    }

    // EXTENDS METHODS

    User.prototype.checkPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }

    User.prototype.toJSON = function () {
        let obj = Object.assign({}, this.get());
        delete  obj.password;
        return obj;
    }
    return User;
}
;
