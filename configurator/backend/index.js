const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db")

dotenv.config()
const app = express()


console.log("🔍 Проверка переменных окружения:")
console.log("NODE_ENV:", process.env.NODE_ENV)
console.log("PORT:", process.env.PORT)
console.log("MONGO_URI установлен:", !!process.env.MONGO_URI)

connectDB()

app.use(cors())
app.use(express.json())

const userRoutes = require("./routes/userRoutes")
const msgRoutes = require("./routes/msgRoutes")
const gpuRoutes = require("./routes/gpuRoutes")
const cpuRoutes = require("./routes/cpuRoutes")
const ramRoutes = require("./routes/ramRoutes")
const strRoutes = require("./routes/strRoutes")
const pbsRoutes = require("./routes/pbsRoutes")
const mbsRoutes = require("./routes/mbsRoutes")
const coolsRoutes = require("./routes/coolsRoutes")
const caseRoutes = require("./routes/caseRoutes")
const prebuildRoutes = require("./routes/prebuildRoutes")


app.use("/api/users", userRoutes)
app.use("/api/messages", msgRoutes)
app.use("/api/gpus", gpuRoutes)
app.use("/api/cpus", cpuRoutes)
app.use("/api/rams", ramRoutes)
app.use("/api/storage", strRoutes)
app.use("/api/power", pbsRoutes)
app.use("/api/motherboards", mbsRoutes)
app.use("/api/cools", coolsRoutes)
app.use("/api/cases", caseRoutes)
app.use("/api/prebuilds", prebuildRoutes)

const frontendPath = path.join(__dirname, "../dist")
console.log("📁 Frontend path:", frontendPath)
app.use(express.static(frontendPath))


app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`)
  console.log(`🌐 Режим: ${process.env.NODE_ENV}`)
})
