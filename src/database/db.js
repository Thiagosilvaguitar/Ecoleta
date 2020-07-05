// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//Ultilizar o objeto do banco de dados para as nossas operações

db.serialize(() => {
  //Com comandos sql eu vou :
  // 1. Criar uma tabela
  db.run(`
   CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
   );
`);

  //2. Inserir dados na tabela
  const query = `
 INSERT INTO places (
    image,
    name,
    add ress,
    address2,
    state,
    city,
    items
 ) VALUES (?,?,?,?,?,?,?);
 `
  const values = [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
    "Colectoria",
    "Guilherme Gemballa, Jardim América",
    "Numero 260",
    "Santa catarina",
    "Rio do sul",
    "Resíduos Eletrônicos, Lâmpadas"
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    console.log("cadastrado com sucesso")
    console.log(this)
  }

  db.run(query, values, afterInsertData)

  //3. Consultar os dados da tabela

  //4. Deletar um dado da tabela
});
