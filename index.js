const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors('*'))

const port = process.env.PORT || 8000;

app.get("/test", (req,res) => {
  res.status(200).send({
    status: true,
    message: "api is running"
  })
})


app.use(router)

app.listen(port, () => {
  console.log("server is running")
})