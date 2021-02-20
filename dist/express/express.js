"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config = require("./port.json");
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("Hello from express!");
});
app.listen(config.PORT, () => {
    console.log("> > > Express App Started! < < <");
});
