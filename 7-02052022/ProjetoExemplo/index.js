// importação do módulo do servidor express
const express = require("express");

// Criação do aplicativo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

// Vamos criar a primeira rota do servidor
// Esta será a tora raiz
app.get("/", (req, res) => {
  res.send("Olá! Seja bem vindo. Você está na rota raiz");
});

// Definir uma porta de comunicação com o servidor de aplicação
app.listen(5000, () => console.log(`Online em http://localhost:5000`));
