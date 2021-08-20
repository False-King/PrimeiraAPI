const { response } = require('express');
const express = require('express');
const app = express();
const data = require("./data.json")

app.use(express.json());
/*

    verbos http:
    GET - Receber dados de um Resource.
    POST - Enviar dados ou informações para serem processados por um Resource
    PUT - Atualizar dados de um Resource
    DELETE - Deletar um Resource

*/


app.get("/client",function(req,res){
    res.json(data);
});

app.get("/client/:id",function(req,res){
    const { id } = req.params
    const client = data.find(cli => cli.id ==  id)

    if(!client){
        return res.status(404).json();
    }

    res.json(client)
});

app.post("/client",function(req,res){});

app.put("/client/:id",function(req,res){});


app.delete("/clientdelete/:id",function(req,res){

    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id); 


    res.json(clientsFiltered);
});

app.listen(3000,function(){
   console.log("Server is running") 
});