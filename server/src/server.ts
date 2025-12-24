import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './database/index.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Dream App está online! 🚀');
});



app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});