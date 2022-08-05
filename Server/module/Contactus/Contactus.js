// import express from "express"
const express = require('express')
const app=express()
// import cors from "cors"
const cors = require("cors");
// import mongoose from "mongoose"
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
const formidable= require('formidable');
const fs=require('fs')


mongoose.connect("mongodb://localhost:27017/userdashord", {useNewUrlParser: true})
.then(response =>{
    console.log('DB Conected')
}).catch(err=> console.log("Unable to connect DB"))


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
        data:Buffer,
        contentType:String,
    },
    message: {
        type:String,
    }
    
})

const User = new mongoose.model("User", userSchema)





app.use(bodyParser.json())
app.use(cors())


const userData=(req,res)=>{
    const form= new formidable.IncomingForm();

    form.parse(req,(err, fields, file)=>{
        if(fields)
        {
            const{name,email,message}=fields
            if(!name || !email || !message)
            {
                return res.status(400).json({
                    error:"Fill all the fields"
                })
            }

            
        }
        {

        if(file.photo.size>9000000)
        {
            return res.status(400).json({
                error:"Image size is too long"
            })
        }
        const User = new User(fields)
        user.photo.data=fs.readFileSync(file.photo.path)
        user.photo.contentType=file.photo.type

        user.save((err,user)=>{
            if(err)
            {
                return res.status(400).json({
                    error:"Not save in DB"
                })
            }return res.json(user)
        })
    }
    })

}



app.post('/userdashboard', userData);





const port = 5000

app.listen(port,()=>{
    console.log(`app is runing at ${port}`)
})