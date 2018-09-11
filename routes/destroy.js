const express = require("express");
const route = express.Router();

const Post = require("../model/Post");

route.delete("/delete/:id", (req, res, next) => {
  Post.destroy({
      where: {
          id: req.params.id
      }
  }).then((deletedPost)=>{
      res.json({
          "message": "post has been deleted",
         
      })
  })

}); 
   


 
 
module.exports = route;