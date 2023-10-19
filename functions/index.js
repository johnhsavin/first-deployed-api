//import tools from other sources first
import { onRequest } from "firebase-functions/v2/https"
import express from "express"
import cors from "cors"
// import our code
import { getAllCoffees, addCoffees } from "./src/coffees.js"

// start express app
const app = express()
app.use(express.json())
app.use(cors())

// create route
app.get("/test", (req, res) => res.send("It is working!"))

// create get and post functions
app.get("/coffees", getAllCoffees)
app.post("/coffees", addCoffees)

// tell Google to create port function and point to API
export const api = onRequest(app)  // short version to below
// const api = onRequest(request, response => (req, res)) the longer version

