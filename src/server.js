// install and import express

// const express = () => {};
const express = require("express")
let app = express();
const User = require('./assets/user.json')
// Code here
app.get('/',async(req,res)=>{
    try {
        const user = await User.find().lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})

app.post('/users',async(req,res)=>{
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})
app.get('/users/:id',async(req,res)=>{
    try {
        const user = await User.find(req.params.id).lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})

app.get('/users/:id',async(req,res)=>{
    try {
        const user = await User.find(req.params.id).lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})
app.get('/users',async(req,res)=>{
    try {
        const user = await User.find().lean().exec()
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})

// app.listen('8080',async()=>{
//     try {
//         console.log('listening On port 8000')
//     } catch (error) {
//         console.log(error)
//     }
// })
// Note: Do not remove this export statement

module.exports = app;
