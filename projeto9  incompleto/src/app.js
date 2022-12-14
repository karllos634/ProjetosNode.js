let express = require("express");
let app = express();
let mongoose = require("mongoose");
let user = require("../models/User");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/guiapics",{useNewUrlParser: true, UseUnifiedTopology: true})
    .then(() => {
        //console.log("Conectado com o banco")
    }).catch((err) => {
        console.log(err);
    })

let User = mongoose.model("User",user);

app.get("/",(req,res) => {
    res.json({});
});

app.post("/user",async (req,res) => {

    if(req.body.name == "" || req.body.email == "" || req.body.password == ""){
        res.sendStatus(400);
        return;
    }

    try{
        let user = await User.findOne({"email": req.body.email});

        if(user != undefined){
            res.sendStatus = 400;
            res.json({error: "E-mail já cadastrado"});
            return;
        }

        let newUser = new User({name: req.body.name, email: req.body.email, password: req.body.password});
        await newUser.save();
        res.json({email: req.body.email});
    }catch(err){
        res.sendStatus(500);
    }
})

module.exports = app; 

