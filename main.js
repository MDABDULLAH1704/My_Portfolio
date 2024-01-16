const express = require('express')
const path = require("path");
const app = express()
const port = 3000


// For serve file (Make a folder named public)   
app.use(express.static(__dirname + '/public'));


// serve HTML file (home page) from public folder
app.get("/", (req, res) => {
    res.sendFile('public/home.html', { root: __dirname })
})


// get request
app.get('/hlo', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})