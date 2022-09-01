class Filme{
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];
    }

    Reproduzir(){
        console.log("reproduzindo...");
    }

    Pausar(){
        console.log("Pausado ||");
    }

    Avançar(){
        console.log("Avançar >>");
    }
    
    Fechar(){
        console.log("Fechar X");
    }

    Ficha(){
        console.log("titulo: " + this.titulo);
        //console.log("ano de lançamento: " + this.ano);
        //console.log("Genero: " + this.genero);
        //this.Reproduzir();
        //this.Avançar();
    }
    
}

var inter = new Filme("interstellar");




































var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2h");

vingadores.Ficha();


//console.log(vingadores.titulo);
//console.log(vingadores.ano);
//console.log(vingadores.genero);


var batman = new Filme("batman", 2009, "Ação", "Alguem2", "2:30");

batman.Ficha();

//console.log(batman.titulo);
//console.log(batman.genero);

var starwars= new Filme("star wars", 2009, "Ação", "Alguem2", "2:30");

starwars.Ficha();
