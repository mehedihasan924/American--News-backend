const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const category=require('./Data/categories.json')



app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is runing..')
  })
  app.get('/categories', (req, res) => {
    res.send(category)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
