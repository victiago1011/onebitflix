"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.episodeResourceFeatures = exports.episodeResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
exports.episodeResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'courseId', 'order', 'uploadVideo', 'secondsLong'],
    filterProperties: ['name', 'synopsis', 'courseId', 'secondsLong', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'courseId', 'order', 'secondsLong'],
    showProperties: ['id', 'name', 'synopsis', 'courseId', 'order', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
};
exports.episodeResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            aws: {
                region: 'us-east-1',
                bucket: path_1.default.resolve('bucket-onebitflix-victor')
            }
            /*local: {
              bucket: path.join(__dirname, '../../../uploads')
            }*/
        },
        properties: {
            key: 'videoUrl',
            file: 'uploadVideo'
        },
        uploadPath: (record, filename) => `videos/course-${record.get('courseId')}/${filename}`
    })
];
