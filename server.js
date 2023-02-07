const express = require('express');
const app = express();

app.set("view engine", "ejs");


// Criando uma rota com get(), "/" -> dominio, executar a função dando a resposata de renderizar o index;
app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title:"A",
            message: "morzinho"
        },
        {
            title:"I",
            message:"nstall ejs"
        },
        {
            title:"S",
            message:"intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript"
    res.render("pages/index", {
        qualitys: items, subtitle: subtitle,
    });
})

//Vai renderizar e criar o arquivo about
app.get("/about", function (req, res) {
    res.render("pages/about");
})

//Vai carregar o express e vai ficar ouvindo(listen) a porta 8080 e executar o código à cima
app.listen(8080);

console.log('Rodando')