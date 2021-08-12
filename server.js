const { response } = require('express');
const express = require('express');
const app = express();
const data = require("./data.json")


/*

    verbos http:
    GET - Receber dados de um Resource.
    POST - Enviar dados ou informações para serem processados por um Resource
    PUT - Atualizar dados de um Resource
    DELETE - Deletar um Resource

*/
app.use(express.json());

app.get("/client",function(req,res){
    res.json(data);
});


app.get("/client/:id",function(req,res){});
app.post("/client",function(req,res){});
app.put("/client/:id",function(req,res){});
app.delete("/client/:id",function(req,res){});

app.listen(3000,function(){
   console.log("Server is running") 
});