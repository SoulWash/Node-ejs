const express = require('express');
const app = express();

app.set("view engine", "ejs");


// Criando uma rota com get(), "/" -> dominio, executar a função dando a resposata de renderizar o index;
app.get("/", function (req, res) {
    res.render("index");
})

//Vai renderizar e criar o arquivo about
app.get("/about", function (req, res) {
    res.render("about");
})

//Vai carregar o express e vai ficar ouvindo(listen) a porta 8080 e executar o código à cima
app.listen(8080);

console.log('Rodando')