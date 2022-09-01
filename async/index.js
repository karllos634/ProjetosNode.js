function pegarId(){
    return new Promise((resolve, eject) => {
        setTimeout(() => {
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("karllos@gmail.com")
        },2000)
    })
}

function enviarEmail(corpo, para){
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            var deuErro = true;
            if(!deuErro){
                resolve({time: 6, to: "karllos@gmail.com"}) //Promessa OK!
            }else{
                reject("Fila cheia") //Foi mal, eu falhei :(
            }
        },4000)
    });
}

function pegarUsuarios(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([
               {name: "Karllos", lang:"JS"},
               {name: "vale", lang:"C#"},
               {name: "Daniel", lang:"Java"}
            ])
        },3000)
    })
}



async function principal(){
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Olá, como vai?",email);
        console.log("Email enviado com sucesso!");
    }catch(erro){
        console.log("erro")
    }
}

principal();



/*
console.log("INICIO")
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {

        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado para o usuário com id: " + id)
        }).catch(err => {

        })
    })
})
console.log("FIM")
*/