const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    date : {
        type:String,
        required:true
    },
   

});


module.exports= mongoose.model("Post", PostSchema ) 