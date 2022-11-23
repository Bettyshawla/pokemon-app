// require("dotenv").config();
const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")
const reactViews = require("express-react-views")
// const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   mongoose.connection.once("open", () => {
//     console.log("connected to mongo")
//   })

// Engine
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// Middleware
// app.use((req, res, next) => {
//     console.log("Im running for all routes")
//     console.log("1. middleware")
//     next()
//   })

//   app.use(express.urlencoded({ extended: false }))

  // localhost
app.get('/', (req, res)=>{
    res.send("Welcome to the Pokemon App!")
})

//  Index.jsx
app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon})
})

//  Show.jsx
app.get("/pokemon/:id", (req, res) => {
    res.render("Show", pokemon [req.params.id])
})

//  New
app.get("/pokemon/new", (req, res) => {
    console.log(("2. controller"))
    res.render("New")
})




// app.post("/pokemon", (req, res) => {
//     Pokemon.create(req.body, (error, createdPokemon) => {
//         console.log(createdPokemon)
//         console.log("creating new pokemon")
//         if(!error) {
//             res.status(200).redirect("/pokemon");
//             //res.status(200).send(createdPokemon)
//         } else {
//             res.status(400).send(error);
//         }
//     });
// });
//  app.get("/pokemon/:id", (req, res) => {
//     Pokemon.findById(req.params.id, (error, pokemonByID) => {
//         if(!error) {
//             res.status(200).render("Show", {
//                 pokemon: pokemonByID
//             });
//         } else {
//             res.status(400).send(error);
//         }
//     });
// });







// listening port
app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`)
})