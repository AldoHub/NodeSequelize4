const express = require("express");
const route = express.Router();

const Post = require("../model/Post");

route.put("/update/:id", (req, res, next) => {
   let newTitle = req.body.title;
   let newContent = req.body.content;
   
   let values = {title: newTitle,  content: newContent};
   let selector = {
       where: {id: req.params.id}
   }
   Post.update(values, selector)
   .then((updatedPost)=>{
       console.log(updatedPost);
       res.json({
           "message": updatedPost
       })
   })
   .catch(err => {
       res.json({
           "message": err
       })
   })

}); 
   


 
 
module.exports = route;