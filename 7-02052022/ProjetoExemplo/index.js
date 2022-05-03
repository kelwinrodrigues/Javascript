// importação do módulo do servidor express
const express = require("express");

// importação do módulo do mongoose
const mongoose = require("mongoose");

// Criação do aplicativo do servidor express
const app = express();

// Permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

/*
URL de conexão com o banco de dados Mongodb
mongodb+srv://kelwin:<password>@projetocool.oadaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
const urldb =
  "mongodb+srv://kelwin:k3lwin25072004@projetocool.oadaz.mongodb.net/bancodados?retryWrites=true&w=majority";

mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

//Criar a estrutura da tabela para cadastro dos clientes
const tabela = mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});

//Criar o modelo de dados, ou seja, criar a tabela com a escritura
const Cliente = mongoose.model("tbcliente", tabela);

// Vamos criar a primeira rota do servidor
// Esta será a tora raiz
app.get("/", (req, res) => {
  //Vamos trazer todos os clientes cadastrados e exibir em tela
  Cliente.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao carregar clientes->${erro}` });
    res.status(200).send({ output: dados });
  });
});

/* Vamos criar uma rota com o verbo post. É usado quando se deseja
cadastrar algum dado ou para fazer sistema de login
*/
app.post("/cadastro", (req, res) => {
  //Vamos criar um novo cliente a partir dos dados enviados
  const cli = new Cliente(req.body);

  //Comando SAVE para gravar os dados no banco de dados
  cli
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cliente cadastrado`, info: dados });
    })
    .catch((erro_) =>
      res.status(500).send({ output: `Erro ao cadastrar->${erro}` })
    );
});

/* Rota para atualizar os dados dos clientes. Vamos usar o verbo PUT.
Para atualizar precisaremos de 2 informações. A primeira é o id do dado
que você deseja atualizar e a segunda, são os dados do que deseja atualizar
*/
app.put("/atualizar/:id", (req, res) => {
  Cliente.findByIdAndUpdate(
    req.params.id,
    res.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(400).send({ output: `Erro ao atualizar->${erro}` });
      res.status(200).send({ output: `Atualizado`, info: dados });
    }
  );
});

// Para deletar um dado iremos usar o verbo DELETE passando o id
app.delete("/apagar/:id", (req, res) => {
  res.status(204).send({ output: `Apagou` });
});

// Definir uma porta de comunicação com o servidor de aplicação
app.listen(5000, () => console.log(`Online em http://localhost:5000`));
