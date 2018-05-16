const express = require ('express')
const {MongoClient, ObjectID} = require ('mongodb')
const bodyParser = require ('body-parser')
const assert = require ('assert')


const app = express()
app.use(bodyParser.json())

const mongo_url = 'mongodb://localhost:27017'
const database = 'contact'

MongoClient.connect(mongo_url, (err, client) => {
  assert.equal(null , err, 'data-base error')

  const db = client.db(database)

  app.post('/contacts', (req , res) =>{
   let new_contact = req.body
    db.collection('friends').insertOne({...new_contact}, (err, data) =>{
      if (err) {
      res.send('cant add the new conatct')
    } else {
      res.send('conatc added ')
    }
    })
  })

  app.get('/contacts' , (req , res) => {
    db.collection('friends').find().toArray((err , data) => {
      res.send(data)
    })
  })

  app.get('/contact/:id' , (req , res) => {
    const id = ObjectID(req.params.id)
    db.collection('friends').findOne({_id : id}, (err , data)=> {
      if (err) {
      res.send('cant get the requested conatct')
    } else {
      res.send(data)
    }
    })
  })

 app.delete('/contact/:id' , (req , res) => {
   const id = ObjectID(req.params.id)
   db.collection('friends').findOneAndDelete ({_id:id} , (err , data)=> {
     if (err) {
     res.send('cant delete the requested conatct')
   } else {
     res.send('contact removed')
   }
   })
 })

 app.put('/contact/:id' , (req , res) => {
     const id = ObjectID(req.params.id)
     const updateInfo = req.body
     db.collection('friends').findOneAndUpdate({_id:id},{$set:{...updateInfo}}, (err, data) => {
       if (err) {
       res.send('cant updated the requested conatct')
     } else {
       res.send('contact updated')
     }
   })
})

})


app.listen(3001, (err) => {
  if (err) {
    console.log('server is dead')
  } else {
    console.log('server is 3ayech');
  }
})
