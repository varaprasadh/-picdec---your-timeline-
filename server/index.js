/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const express=require('express');
const app=express();
const AuthHandler=require('./Routes/AuthHandler');
const MainPageHandler=require('./Routes/mainPageHandler');
const bodyParser=require('body-parser');
const multer=require('multer');
const cors=require('cors');

const connection=require('./dbConnection');

const port=3000;




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename;
    }
}).any());


app.use(AuthHandler);
app.use(MainPageHandler);

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
}) 