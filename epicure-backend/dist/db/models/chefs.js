"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chefsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    award: {
        type: Boolean,
        required: false,
    },
    new: {
        type: Boolean,
        required: false,
    },
    popular: {
        type: Boolean,
        required: false,
    },
    Restaurantscontainer: {
        type: Array,
        required: false,
    },
}, { timestamps: true });
const Chefs = mongoose_1.default.model('Chefs', chefsSchema);
exports.default = Chefs;
