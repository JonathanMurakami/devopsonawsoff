const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello RM338845, RM338967, RM338674, RM338589 World! com passo manual')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
