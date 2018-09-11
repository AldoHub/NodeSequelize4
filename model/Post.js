const Sequelize = require("sequelize");
const connection = require("../config/config");


//the model is used to make the columns on the database
//once you run the application server
const Post = connection.define('post', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    }
  });

  //run the sync command in order to create the database table
  //Post.sync();
  //then need to remove it, to avoid setting up the table every time
module.exports = Post;