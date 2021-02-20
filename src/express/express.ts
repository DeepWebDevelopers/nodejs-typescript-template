import express from "express";
import config = require("./port.json");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello from express!");
});

app.listen(config.PORT, () => {
	console.log("> > > Express App Started! < < <");
});
