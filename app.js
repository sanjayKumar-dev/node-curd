const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb')
const app = express()

const uri = ""
mongoose.connect(uri)
const con = mongoose.connection

con.on('open', function(){
    console.log('connected ....');
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server listening on port 9000')
})



// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect()
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 })
//       console.log("Pinged your deployment. You successfully connected to MongoDB!")
//     } catch (err) {
//         console.log('Find the Error',err)
//     }
//     // finally {
//     //   // Ensures that the client will close when you finish/error
//     //   await client.close()
//     //   console.log('Connection closed');
//     // }
//   }
//   run().catch(console.dir)