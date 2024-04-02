import cors from "cors";
import express from "express";
import db from "./src/database/mongoose.js";

const app = express();
const routeBase = "/api/v1";
const port = process.env.PORT || 3000;

// Configuración CORS
const corsOptions = {
  origin: "*", // Reemplaza con el dominio permitido
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.json({ limit: "20mb" }));
app.use(express.static("public"));

// Rutas
//app.use(`${routeBase}/auth`, auth);

app.use("/", (req, res) => {
  db;
});

app.listen(port, () => {
  console.log(`Servidor iniciado exitosamente en el puerto ${port}`);
});
