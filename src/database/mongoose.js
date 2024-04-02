import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://salvadorjuars4:xZqv4GMljdTnEUVj@tasklist.gbwtmfr.mongodb.net/')

const db = mongoose.connection;
db.on('error', () => { console.error.bind(console, 'Error de Conexion:') });
db.once('open', () => {
    console.log('Conexion exitosa a la base de datos')
});

const schema = new mongoose.Schema({
    nombre: String,
    password: String,
    email: String,
});
export default db;