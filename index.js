const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => res.send('I am in expressjs'))


app.listen(3000, function (){
	console.log("Example app listening");
})