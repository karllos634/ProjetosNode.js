let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131",async() => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});


test("Deve retornar vermelho como cor favorita do Karllos",() => {
    return request.get("/cor/karllos").then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.cor).toEqual("vermelho");
        expect(res.body.color).toEqual("red");
    }
    );
})