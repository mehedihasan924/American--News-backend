const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const category=require('./Data/categories.json')
const news=require("./Data/news.json")



app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is runing..')
  })
  app.get('/categories', (req, res) => {
    res.send(category)
  })
  app.get('/news', (req, res) => {
    res.send(news)
  })
  app.get('/news/:id', (req, res) => {
    const id=req.params.id
   const selectedNews=news.find(n=>n._id===id)
   res.send(selectedNews)
  })

  app.get('/categories/:id', (req, res) => {
    const id=req.params.id
    if(id==0){
      res.send(news)
    }
    else{
      const categoryData=news.filter(n=>n.category_id===id)
      res.send(categoryData)
    }

  })






  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
