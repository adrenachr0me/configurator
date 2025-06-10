const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    console.log("🔄 Попытка подключения к MongoDB...")
    console.log("MongoDB URI:", process.env.MONGO_URI ? "✅ Установлен" : "❌ Не найден")

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`✅ MongoDB подключена: ${conn.connection.host}`)
  } catch (error) {
    console.error("❌ Ошибка подключения к MongoDB:", error.message)
    console.error("Полная ошибка:", error)
    process.exit(1)
  }
}

module.exports = connectDB
