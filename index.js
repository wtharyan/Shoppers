const express = require('express');
require("./config");
const registered = require('./registered');
const feedback=require('./feedback');
const product=require('./product');
const path = require('path');
const ejs = require('ejs');
const clonepath=path.join(__dirname,"Clone project")
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(clonepath));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.post("/reg",async (req, resp)=>{
    const {name,age,gender,address,phone,email} = req.body;
    let data = new registered(req.body);
    const result = await data.save();
    resp.send(result);
    console.log(result);

});

app.get("/database", async (req, resp) => {
    let data = await registered.find();
    resp.render('database',{data});
});

app.post("/feed",async (req, resp)=>{
    const {name,email,message} = req.body;
    let messages = new feedback(req.body);
    const accept = await messages.save();
    resp.send(accept);
    console.log(accept);
});

app.get("/feeds", async (req, resp) => {
    let messages = await feedback.find();
    resp.render('feeds',{messages});
});

app.post("/cart",async (req, resp)=>{
    const {user, productid, quantity} = req.body;
    let items = new product(req.body);
    const list = await items.save();
    resp.send(list);
    console.log(list);
});

app.get("/wishlist", async (req, resp) => {
    let items = await product.find();
    resp.render('wishlist',{items});
});
app.listen(3500, )
