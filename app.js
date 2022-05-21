const express =require('express');
const mongoose = require('mongoose');
const app = express();
const dataRouter = require('./router/data');
const saatRouter = require('./router/saat');
const dersRouter = require('./router/ders');
const günRouter = require('./router/gün');


var bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://alperen55:kralbaba55@cluster0.sabcb.mongodb.net/blogapi?retryWrites=true&w=majority')
.then(()=>{

    app.listen(3000,()=>{

        console.log("Port Dinleniyor.");
        })
})
.catch((err)=>{
    console.log("err",err);
})

app.get("/", (req, res) => {
    res.json("Homepage");
  });

app.use('/',saatRouter);
app.use('/',günRouter);
app.use('/',dersRouter);
app.use('/',dataRouter);


