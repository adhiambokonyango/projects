const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname ));

app.get("/", (req, res)=>{
    res.sendFile( __dirname + "/" + "form.html" );
})

app.listen(3000, ()=>{
    console.log("server started on port: 3000")
});