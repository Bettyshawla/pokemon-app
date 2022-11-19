const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")
const reactViews = require("express-react-views")

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get('/', (req, res)=>{
    res.send("Welcome to the Pokemon App!")
})

// app.get('/pokemon', (req, res) => {
//     res.send(pokemon)
// })


app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon})
})




app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`)
})