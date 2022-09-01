var database = require("./database");

/*
var dados = [
    {
        nome: "Call of Duty 2",
        preco: 100
    },
    {
        nome: "GTA V",
        preco: 55.90
    },
    {
        nome: "Wow",
        preco: 120
    }
]

/* INTRODUZIR
database.insert(dados).into("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/*SELECT
database.select(["id","preco"]).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* NESTED QUERIES
database.insert({nome: "Mistis of noyah", preco: 25}).into("games").then(data => {
    database.select(["id","preco"]).table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})
*/

/* WHERE
database.select()
    .whereRaw("nome = 'Mistis of noyah' OR preco > 120")
    .table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
*/

/*RAW
database.raw("SELECT * FROM games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* Delete
database.where({id: 3}).delete().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* Update
database.where({id: 5}).update({preco: 40}).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); 
*/

/*
database.select().table("games").orderBy("nome","desc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* Assossietad inserts
database.insert({
    nome: "Blizzard",
    game_id: 5
}).table("estudios").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* 1 para 1
database.select(["games.*","estudios.nome as studio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*
database.select(["games.*","estudios.nome as studio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id").where("games.id",5).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* 1 para M
database.select(["games.*","estudios.nome as estudio_nome"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then(data => {
    var estudiosGamesArray = data;
    var game = {
        id: 0,
        nome: "",
        estudios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome

    data.forEach(estudio => {
        game.estudios.push({nome: estudio.estudio_nome})
    })
    console.log(game);

}).catch(err => {
    console.log(err);
})
*/

/*
database.select([
        "estudios.nome as estudio nome",
        "games.nome as game_nome",
        "games.preco as preco"
]).table("games_estudios")
    .innerJoin("games","games.id","games_estudios.game_id")
    .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
    .where("games.id",17)
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
    */

/*
    database.select([
        "estudios.nome as estudio nome",
        "games.nome as game_nome",
        "games.preco as preco"
]).table("games_estudios")
        .innerJoin("games","games.id","games_estudios.game_id")
        .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
        .where("estudios.id",2)
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
     });
*/

/* Transação
async function testeTransacao(){

    try{
         await database.transaction(async trans =>{
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Pyxeralia"}).table("estudios");
            await database.insert({nome: "Mojang"}).table("estudios");
            await database.insert({nome: "Gear box"}).table("estudios");
         });
     }catch(err){
        console.log(err)
    }
};

testeTransacao();
*/
