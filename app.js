const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = ""

const app = express()

mongoose.connect(uri)
const con = mongoose.connection

con.on('open', function(){
    console.log('connected ....');
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