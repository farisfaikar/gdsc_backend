import express from "express";
import { notesData } from "./notes.js";
import crypto from "crypto";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    const id = crypto.randomUUID();
    const newData = { id, title, content };
    
    notesData.push(newData);
    res.status(201).json({ "msg": "success", id });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
