const express = require("express");
const route = express.Router();

const Post = require("../model/Post");

route.post("/create", (req, res, next) => {
    const newPost = Post.create({
        title: req.body.title,
        content: req.body.content
    }).then((postCreated)=>{
        res.status(201).json({message: postCreated});
    }).catch((err)=>{
        res.status(500).json({message: err})
    });
    
   
});

module.exports = route;