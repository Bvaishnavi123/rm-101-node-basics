// install and import express

// const express = () => {};
const express = require("express")
let app = express();
const User = require('./assets/user.json')
// Code here
app.get('/',async(req,res)=>{
    try {
        
        return res.status(200).send(User).sendFile(__dirname+"/assets/users.html")
    } catch (error) {
        return res.status(400).send(error)
    }
})

app.post('/users',async(req,res)=>{
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(404).send(error)
    }
})


app.get('/users/:id',async(req,res)=>{
    try {
        const user =  User.filter((e)=>e.id==req.params.id)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(400).send(error)
    }
})
app.get('/users',async(req,res)=>{
    try {
        // const user = await User.find().lean().exec()
        return res.status(200).send(User)
    } catch (error) {
        return res.status(404).send(error)
    }
})

// Note: Do not remove this export statement


module.exports = app;
