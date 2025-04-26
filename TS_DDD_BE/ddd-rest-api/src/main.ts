// filepath: c:\Repo\TS_DDD\TS_DDD_BE\ddd-rest-api\src\main.ts
import express from "express";
import cors from "cors"; // Importa el paquete cors
import documentRoutes from "./infrastructure/routes/DocumentRoutes";

const app = express();
const PORT = 5000;

// Habilita CORS
app.use(cors({
    origin: "http://localhost:3000", // Permite solicitudes solo desde este origen
    methods: ["GET", "POST"], // Métodos permitidos
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json());
app.use("/api", documentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});