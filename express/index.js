const express = require("express"); //importando o express
const app = express(); //iniciando o express



app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao guia do programador</h1>");
});

app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
       res.send("<h2>Artigo: " + artigo + " <h/2>");
    }else{
        res.send("<h3>Bem vindo ao meu blog!: www.guiadoprogramador.com</h3>");
    }
})

app.get("/canal/youtube",function(req,res){
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
        res.send("nenhum canal fornecido!")
    }
})

app.get("/ola/:nome/:empresa", function(req,res){
    //REQ => DADOS ENVIADOS PELO USUARIO
    //RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUARIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + "</h1>");
});


app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})























