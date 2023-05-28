const Post = require ('../model/dbmodel');
const mongoose = require('mongoose')
const asyncHandler = require("express-async-handler")





const createPost = asyncHandler(((req, res) => {
    console.log("the request body is ", req.body);
    const {title, date} = req.body;
    const newPost =  Post.create({
            title,
            date,
        });
    
    res.status(201).json(newPost)
    
       
        
        
    // if(!title || !date) {
    //     res.status(400);
    //     console.log("it can't be blank")
    // }
    //
    
}));








//     try {
//         const newPost = new Post({
//             title:req.body.title,
//             date:req.body.date,
           
//         });

//         const postData =await newPost.save()
//         res.status(200).send({ success:true, msg:'post data',  data:postData});
        
//     } catch (error) {
//         res.status(400).send({ success:false, msg:error.message});
        
//     }

// }

module.exports = {
    createPost

}