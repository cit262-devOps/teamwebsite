import express from "express"

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/travis', (req,res) => {res.send("Hello Travis")});
app.get('/gary', (req,res) => {res.send("Hello Gary")});
app.get('/sam', (req,res) => {res.send("Hello Sam")});
app.get('/conner', (req,res) => {res.send("Hello conner")});

app.listen(port, ()=>console.log("Listening"));
