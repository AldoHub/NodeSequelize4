const express = require("express");
const bodyParser = require("body-parser");
const server = express();


server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

const posts = require("./routes/posts");
const create = require("./routes/create");
const update = require("./routes/update");
const destroy = require("./routes/destroy");

//manage CORS
//to avoid CORS problems, we need to pass the next headers
server.use((req, res, next)=>{
    //we say what we want to allow, you can whitelist IPs here or domains
    res.header("Access-Control-Allow-Origin", "*"); 
    //what kind of headers we are allowing
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");  

    //check for the options request from browsers
    //this will always be sent
    if(req.method === "OPTIONS"){
        //tell the browser what he can ask for
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        //we just respond with OK status code
        return res.status(200).json({
            "statusMessage": "ok"
        });
    }
   
    next();
});


//routes
server.use("/api/", create);
server.use("/api/", posts);
server.use("/api/", update);
server.use("/api/", destroy);

server.use((req,res,next)=>{
    const error = new Error("Unable to manage the request");
    //send a status code error
    error.status= 404;
    //forward the request with the error
    next(error);
})

//------------- error message
server.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        "error": {
            "message": error.message
        }
    })
});


//listen function for Node / express
server.listen(3000, ()=>{
    console.log("The server is running");
})