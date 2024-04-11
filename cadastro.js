import express, { json } from 'express';
import { connect, connection, Schema, model } from 'mongoose';

const app = express();
const port = 8081;

// Conectar ao MongoDB
connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão bem-sucedida com o MongoDB');
});

// Definir o schema do modelo
const usuarioSchema = new Schema({
  nome: String,
  sobrenome: String,
  modeloCarro: String,
  anoCarro: String,
  marcaCarro: String,
  potenciaCarro: String,
  senha: String
});
const Usuario = model('Usuario', usuarioSchema);

// Middleware para processar corpos de requisição JSON
app.use(json());

// Rota para cadastrar um novo usuário
app.post('/api/cadastro', async (req, res) => {
  try {
    const { nome, sobrenome, modeloCarro, anoCarro, marcaCarro, potenciaCarro, senha } = req.body;
    const novoUsuario = new Usuario({ nome, sobrenome, modeloCarro, anoCarro, marcaCarro, potenciaCarro, senha });
    await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
