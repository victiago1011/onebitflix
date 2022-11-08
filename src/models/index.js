"use strict";
// src/models/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Episode = exports.Course = exports.Category = void 0;
const Category_1 = require("./Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return Category_1.Category; } });
const Course_1 = require("./Course");
Object.defineProperty(exports, "Course", { enumerable: true, get: function () { return Course_1.Course; } });
const Episode_1 = require("./Episode");
Object.defineProperty(exports, "Episode", { enumerable: true, get: function () { return Episode_1.Episode; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
Category_1.Category.hasMany(Course_1.Course);
Course_1.Course.belongsTo(Category_1.Category);
Course_1.Course.hasMany(Episode_1.Episode);
Episode_1.Episode.belongsTo(Course_1.Course);
