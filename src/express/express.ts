//? Normal Javascript

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

import express, { Application, Request, Response, NextFunction } from "express";
import config = require("./port.json");

const app: Application = express();

const add = (a: number, b: number) => {
	return a + b;
};

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	// when reloading the express app this will console.log(...)
	console.log(add(5, 5));
	res.send("Hello from express!");
});

app.listen(config.PORT, async () => {
	await console.log("> > > Express App Started! < < <");
});
