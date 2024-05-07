import express from "express";
import axios from "axios";
const app = express()
const PORT = process.env.PORT || 3000

app.get('/',  (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})

