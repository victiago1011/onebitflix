"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.User = database_1.sequelize.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    birth: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    email: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    }
});
