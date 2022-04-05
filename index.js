const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql8");
const path = require('path')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname ));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//const con = require("./databaseConnection");

const dbConstants = require('../ProjectsConstants')

const con = mysql.createConnection({
    host: dbConstants.host,
    user: dbConstants.user,
    password: dbConstants.password,
    database: dbConstants.database
})

con.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})




app.get("/", (req, res)=>{
    res.sendFile( __dirname + "/" + "form.html" );
})



//1. fetch all projects
app.get("/fetch_projects", (req, res)=>{

   let tableName = "project";
   let sql = ` SELECT * FROM ${tableName}`;
    con.query(sql,
        function(
            err,
            result
        ) {
            if (err) {
                console.log(err)
                res.send("an error occurred");
            } else {
                res.send(result);
            }
        })


})

//2. search
app.post("/search_projects", (req, res)=>{
console.log(req.body);
    let tableName = "project";
    let columnName = "ProjectName";
    let sql = ` SELECT * FROM ${tableName} WHERE ${columnName} LIKE '%${req.body.item}%' `;
    con.query(sql,
        function(
            err,
            result
        ) {
            if (err) {
                console.log(err)
                res.send("an error occurred");
            } else {

                res.render('project_search',
                    {  item:  `${result}`});

            }
        })


})




// create project
app.post("/add_project", (req, res)=>{

    let tableName = "project";
    let sql = ` INSERT INTO ${tableName} VALUES (
 ${req.body.ProjectName},
  ${req.body.ProjectRegion},
   ${req.body.StartDate},
    ${req.body.ExpectedEndDate}, 
   ${req.body.ProjectDescription})`;

})

app.listen(3000, "192.168.42.74",()=>{
    console.log("server started on port: 3000")
});