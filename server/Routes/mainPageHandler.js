/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const express=require('express');
const mongoose=require('mongoose');
const Post=require('../models/post');
const fs=require('fs');
const Router=express.Router();

Router.post('/upload',(req,res)=>{
    var file=req.files[0];
    
    var path=file.path;
    var post=new Post({
        name:'bean1',
        img:{  
            data:fs.readFileSync(path),
            contentType:'image/png'
        },
        desc:'some dummy text'
    })
    
    post.save().then(()=>{
        console.log('photo uploaded');
    }).catch(err=>{
        console.log(err);
    })
    res.end('well');
})

Router.get('/posts/:name',(req,res)=>{
    var name=req.params.name;
    console.log("finding with bean1")
    Post.find({name:name}).then(records=>{
        console.log(records)
      res.json({
          posts:records
      })
    }).catch(err=>{
        res.json({
            posts:[]
        })
    })
})

module.exports=Router;
/**
 * app.post(‘/api/photo’,function(req,res){
 var newItem = new Item();
 newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
 newItem.img.contentType = ‘image/png’;
 newItem.save();
});
 */