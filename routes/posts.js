const express = require("express");
const route = express.Router();

//require the Model
const Post = require("../model/Post");

route.get("/posts", (req, res, next) => {
    const newPost = Post.findAll()
    .then((posts)=>{
        res.status(200).json({message: posts});
    }).catch((err)=>{
        res.status(500).json({message: err})
    });
    
   
});

module.exports = route;