const mongoos=require('mongoose');

var userSchema=mongoos.Schema({
    _id:mongoos.Types.ObjectId,
    name:String,
    password:String
});
var User=mongoos.model('User',userSchema);
module.exports=User;
