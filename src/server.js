"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminjs_1 = require("./adminjs");
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.use(adminjs_1.adminJs.options.rootPath, adminjs_1.adminJsRouter);
const PORT = process.env.port;
app.listen(PORT, () => {
    database_1.sequelize.authenticate().then(() => {
        console.log('DB connection successfull.');
    });
    console.log(`Server started successfuly at port ${PORT}.`);
});
