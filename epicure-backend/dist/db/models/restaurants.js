"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const restaurantsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    chef: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    popular: {
        type: Boolean,
        required: false,
    },
    new: {
        type: Boolean,
        required: false,
    },
    open: {
        type: Boolean,
        required: false,
    },
    dishescontainer: {
        type: Array,
        required: false,
    },
    priceRange: {
        type: { min: Number, max: Number },
        required: false,
    },
}, { timestamps: true });
const Restaurants = mongoose_1.default.model('Restaurants', restaurantsSchema);
exports.default = Restaurants;
