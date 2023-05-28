const express = require("express");

const post_route = express();

const bodyparser = require('body-parser');

const multer = require("multer");

const path = require('path');

const postController = require('../Controller/postController')


post_route.use(bodyparser.json());
post_route.use(bodyparser.urlencoded({extended:true}));



post_route.use(express.static('public'));


post_route.post('/create-post', postController.createPost)


// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,path.join(__dirname, '../public/postimage'), function(error,success){
//             if(error){
//                 console.log(error)
//             }
//         })

//     },filename:function(req, file,cb){
//         Date.mow()+ '-'+file.originalname;
//         cb(null,name,function(error,success){
//             if(error)[
//                 console.log(error)
//             ]
//         })

//     }
// })

// const upload = multer({storage:storage});


module.exports = post_route;