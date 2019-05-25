const express_serv = require("express");
const bodyParser = require("body-parser");
var app = express_serv();
app.use(bodyParser.urlencoded({extended: true }));
app.listen(3000,function(){
  console.log("Server Started");
});


app.get("/", function(request,response){
  response.sendFile(__dirname + "/calculator.html");
  console.log(" printing requeste ");
  console.log(request);
})

app.post("/", function(request,response){
  console.log(request);
  console.log(request.body.num1);
  console.log(request.body.num2);
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;
  response.sendStatus(200);
})


app.get("/contact", function(request,response){
  response.send("<h1>Contact me at suguptayash@gmail.com </h1>");
  console.log("Home Page ");
})

app.get("/about", function(request,response){
  response.send("<h1>I work at wipro</h1>");
  console.log("Home Page ");
})

app.get("/social", function(request,response){
  response.send("<h1>SHARE</h1>");
  console.log("Home Page ");
})
