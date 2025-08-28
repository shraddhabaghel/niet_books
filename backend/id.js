const express = require('express')
const app = express()

// middleware
app.use(express.json()) // why is this line needed??


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/user/:id",(req,res)=>{  // :/id-->dynamic id
    const userId = req.params.id
    res.send(`User id is : ${userId}`)
})

app.post("/data",(req,res)=>{
    const {movie,actor} = req.body
    res.send(`The ${movie} of the ${actor} is too good`)
    console.log(movie,actor)
})

app.get("/data",(req,res)=>{
    const {movie,actor} = req.query
    res.send(`The ${movie} of the ${actor} is too good`)
    console.log(req.body.movie) // print actor in console n show me
    // data is passed in postman
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
