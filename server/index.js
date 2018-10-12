require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const port = 3001;
 const {getAll,getOne,addItem,deleteItem,editItem} = require("./productsCtrl")

var app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    //console.log(dbInstance)
    app.set("db",dbInstance)
}).catch(err=>console.log(err));

app.get("/api/inventory",getAll);
app.get("/api/items/:id",getOne);
app.post("/api/item",addItem);
app.delete("/api/item/:id",deleteItem);
app.put("/api/item",editItem);




app.listen(process.env.PORT || port,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})