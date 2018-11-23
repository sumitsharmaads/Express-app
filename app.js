const express = require('express')
const app = express()
const port = 9000
app.get('/home', (req, res) => res.send('I am in expressjs sumit'))
app.get('/about', (req, res) => res.send('I am in expressjs sharma'))



app.listen(port, function (){
	console.log("Example app listening");
})