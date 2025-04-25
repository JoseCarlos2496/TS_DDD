import express from "express";
import documentRoutes from "./infrastructure/routes/DocumentRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", documentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});