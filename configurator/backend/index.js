const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
const gpuRoutes = require("./routes/gpuRoutes");
app.use("/api/gpus", gpuRoutes);

const cpuRoutes = require("./routes/cpuRoutes");
app.use("/api/cpus", cpuRoutes);

const ramRoutes = require("./routes/ramRoutes");
app.use("/api/rams", ramRoutes);

const strRoutes = require("./routes/strRoutes");
app.use("/api/storage", strRoutes);
const pbsRoutes = require("./routes/pbsRoutes");
app.use("/api/power", pbsRoutes);
const mbsRoutes = require("./routes/mbsRoutes");
app.use("/api/motherboards", mbsRoutes);
const coolsRoutes = require("./routes/coolsRoutes");
app.use("/api/cooler", coolsRoutes);
const caseRoutes = require("./routes/caseRoutes");
app.use("/api/cases", caseRoutes);
// Тестовый маршрут
app.get("/", (req, res) => {
  res.send("Сервер работает");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});