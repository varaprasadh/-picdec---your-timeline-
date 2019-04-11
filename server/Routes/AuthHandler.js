/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const Router=require('express').Router();
// const connection=require('../dbConnection');
const mongoose=require('mongoose');
const User=require('../models/user');
const qs=require('querystring');


Router.post('/signin',(req,res)=>{
    var Credintials = req.body;
    console.log(Credintials);
    //check in database and return status
    User.findOne({
        name:Credintials.name,
        password:Credintials.password
    }).then(record=>{
       if(record){
           console.log('valid user')
               res.json({
                   valid:true
               })    
       }else{
            console.log('not a valid user')
            res.json({
                valid:false
            })
        }
    }).catch(err=>{
    //error
        res.json({
            valid: false
        })
    })
});


Router.post('/signup',(req,res)=>{
    var body=req.body;
    console.log(body);
   
    User.findOne({name:body.name}).then(record=>{
        console.log("found:",record);
            if(record){
                res.json({
                    created: false
                })
            }else{
                //create new user
                var newUser = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name: body.name,
                    password: body.password
                })
                console.log(newUser);
                newUser.save().then(result => {
                    //registered 
                    console.log(result);
                    res.json({
                        created: true
                    })
                }).catch(err => {
                    console.log(err);
                    res.json({
                        created: false
                    })
                })
            }
    }).catch(err=>{
        console.log(err);
        res.json({
            created: false
        })
    })
})

module.exports=Router;