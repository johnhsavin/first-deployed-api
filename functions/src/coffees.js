// import the database
import db from "./connectDb.js";

const coll = db.collection("coffees")   //create variable for db
// export and create functions

export function addCoffees(req, res) {
    const newCoffee = req.body          // add new coffee request to body
    coll.add(newCoffee)   // go to db and send coffee (promise)
    // alt to async/await
        .then(() => res.status(201).send({ message: "Success! "})) // if successful, respond status and message
        .catch(err => res.status(500).send({ message: err.message}))  // if error, respond w/ status and a message
}
// create getAllCoffee function
export function getAllCoffees(req, res) {
    coll.get()
        .then(collection => {
            const coffees = collection.docs.map(doc => ({id: doc.id, ...doc.data()})) // same as toArray function in MongoDb
            res.send(coffees)
        }) 
        .catch(err => res.status(500).send({ message: err.message}))
}