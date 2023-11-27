const express=require("express");
const app=express();
app.use(express.json());

const countries = ["India","China","United States","Indonesia","Pakistan","Nigeria","Brazil","Bangladesh","Russia","Mexico"];
 
app.get("/",function(req,res){
  res.send("<h1> Welcome </h1>");
});

app.get("/countries", function (req, res) {
  res.send(countries); 
});

app.get("/countries/:index",function(req,res){
    if(!countries[req.params.index])
    return res.status(400).send("Bad Request");

    res.send(countries[req.params.index]);
});

app.put("/countries/:index",function(req,res){
  if(countries[req.params.index])
  {
    countries[req.params.index]=req.body.name;
    res.send(countries);
  
  }
  else
  res.status(400).send("Bad Request");
})

app.post("/countries",function(req,res){
  countries.push(req.body.name);
  res.send(countries);
})

app.delete("/countries/:index",function(req,res){
  countries.splice(req.params.index,1);
  res.send(countries);
})


app.listen(8080);

