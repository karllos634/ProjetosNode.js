const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo",{useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model("Article",articleModel);

/* Update de Arquivos
Article.findByIdAndUpdate("613f8e73d7891c648bfd4694",{title: "Vue do zero! - TT",
    author: "Karllos", 
    body: "Vue.js do zero!"
}).then(() => {
    console.log("Update!");
}).catch(err => {
    console.log(err);
})
*/


/*
Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});
*/


/*
Article.find({}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
})
*/


/* Delete
Article.findByIdAndDelete("613f8e52710b80e303d7a240").then(() => {
    console.log("Dado removido!");
}).catch(err => {
    console.log(err);
})
*/


/* Cadastro
const artigo = new Article({title: "Olá mundo",
    author: "Karllos Vale", 
    body: "React do zero",
    special: true,
    resume:{
        content: "bla bla bla",
        author: "teste"
    }
});

artigo.save().then(() => {
    console.log("Artigo salvo!")
}).catch(err => {
    console.log(err);
})
*/