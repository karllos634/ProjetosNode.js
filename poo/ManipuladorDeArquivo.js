class Leitor{
    ler(caminho){
        return "Conteudo do arquivo!"
    }
}

class Ecritor{
    Escrever(arquivo,conteudo){
        console.log("Conteudo escrito");
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado");
    }
}

class CriadorDePDF{
    Criar(){
        console.log("Criando PDF...")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!");
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome();
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new CriadorDePDF();
        this.escritor = new Escritor();
    }

    SalvarListadeUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt",lista);
    }
}


var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.Destruidor.Deletar();

var usuarios = new ManipuladorDeArquivo();

usuarios.SalvarListadeUsuarios(["Karllos","Vale"])