require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const chalk = require('chalk');
const cors = require('cors');
const sharp = require('sharp');

const publicacionesRoutes = require('./routes/publicacionesArrendatarioRoute');
const propietarioRoutes = require('./routes/propietarioRoute');

const app = express();
app.use(express.json());

// Función helper para optimizar imágenes (opcional, si la usas)
const helperImg = (filePath, fileName, size = 300) => {
  return sharp(filePath)
    .resize(size)
    .toFile(`optimize/t${fileName}.png`);
};

// Configurar CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://midominio.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Conectar a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error(chalk.red.bold('🔴 Error de conexión:'), chalk.red(err.message));
  } else {
    console.log(chalk.green.bold('🟢 Conectado a MySQL'));
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Rutas de publicaciones
app.use('/api', publicacionesRoutes);
app.use('/api', propietarioRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
  console.log(chalk.blue.bold('🔵 Servidor corriendo en:'), `http://localhost:${PORT}`);
});
