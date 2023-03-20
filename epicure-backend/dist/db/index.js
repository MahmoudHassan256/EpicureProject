"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    await mongoose_1.default.connect("mongodb+srv://Mahmoud256:Mahmoud123@cluster0.hwbwzxv.mongodb.net/Epicure?retryWrites=true&w=majority");
};
exports.connectDb = connectDb;
