const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
let port = process.env.PORT || 8081

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.post('/register', (req, res) => {
  console.log(req.body.email)
  res.send({
    code: 200,
    msg: 'hello world'
  })
})
app.listen(port, () => console.log(`Server has started on port ${port}`))