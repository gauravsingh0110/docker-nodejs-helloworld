const express = require("express");

const app = express();
const port = 8081;

app.get("/", (req, res) => {
    res.send("Hello from your platform 🚀");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});