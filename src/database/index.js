"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'db-nova.cgrbfxibbh8a.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'onebitflix_db',
    username: 'onebitflix',
    password: 'onebitflix',
    define: {
        underscored: true
    }
});
