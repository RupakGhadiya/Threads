// import express from "express"
const express = require('express')
const app=express()
// import cors from "cors"
const cors = require("cors");
// import mongoose from "mongoose"
const mongoose = require("mongoose");
const bodyParser=require('body-parser')
const formidable= require('formidable')



mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    name: {
        type:String,    
        trim: true,
        require:true
    },
    email: {
        type:String,
        trim: true,
        require:true
    },
    photo: {
        type:Buffer,
        contentType:String,
    },
    Message: {
        type:String,
    }
    
})

const User = new mongoose.model("User", userSchema)





app.use(bodyParser.json())
app.use(cors())


const userData=(req,res)=>{
    const form= new formidable.IncomingForm();

    form.parse(req,(err, fields, file)=>{
        console.log(fields)
        console.log(file)
    })

}



app.post('/userdashord', userData);





const port = 6000

app.listen(port,()=>{
    console.log(`app is runing at ${port}`)
})