"use strict";
//? Normal Javascript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
// import config = require("./port.json");
// const app = express();
// const add = (a, b) => {return a + b;}
// app.get("/", (req, res) => {
// console.log(add(5, 5));
// 	res.send("Hello from express!");
// });
// app.listen(config.PORT, async () => {
// 	await console.log("> > > Express App Started! < < <");
// });
//! adding types
const express_1 = __importDefault(require("express"));
const config = require("./port.json");
const app = express_1.default();
const add = (a, b) => {
    return a + b;
};
app.get("/", (req, res, next) => {
    // when reloading the express app this will console.log(...)
    console.log(add(5, 5));
    res.send("Hello from express!");
});
app.listen(config.PORT, async () => {
    await console.log("> > > Express App Started! < < <");
});
