const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    name:String,
    img:{
        data:Buffer,
        contentType:String
    },
    desc:String
});
const Post=mongoose.model('Post',postSchema);

module.exports=Post;