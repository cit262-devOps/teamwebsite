import express from "express";

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/', (req,res) => {res.send("Hello Sam")});

app.listen(port, ()=>console.log("Listening"));
