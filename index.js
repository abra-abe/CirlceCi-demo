const express = require('express');
const app = express();

//Api endpoint that gets the home page
app.get('/', (req, res) => {
    res.send("This is the home page");
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})