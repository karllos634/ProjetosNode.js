class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoQualquer(){
        console.log("Esse metodo faz parte da classe mãe!")
    }
}

class Cachorro extends Animal{

    constructor(nome,idade,preco){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }


    Latir(){
        console.log("ROLF! ROLF!")
    }

    ChecarEstoque(){
        console.log("na loja temos 20 dogões")
    }

    MetodoQualquer(){
        console.log("Aqui é uma classe de dogs!")
        super.MetodoQualquer();
        console.log("Aqui vem funcionalidade!");
    }
}


var dog = new Cachorro("Dogão",5,250,Fila,30);

dog.ChecarEstoque();
dog.Latir();
dog.MetodoQualquer();
console.log("dog.idade")

var animal = new Animal





