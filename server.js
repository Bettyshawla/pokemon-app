const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")
const reactViews = require("express-react-views")

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// localhost
app.get('/', (req, res)=>{
    res.send("Welcome to the Pokemon App!")
})

//  index.jsx
app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon})
})

app.get("/pokemon/:id", (req, res) => {
    res.render("Show", pokemon [req.params.id])
})











// listening port
app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`)
})