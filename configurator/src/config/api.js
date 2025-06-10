// Конфигурация API для фронтенда
const getApiUrl = () => {
  // Проверяем, находимся ли мы в production режиме (Vite)
  if (import.meta.env.PROD) {
    // В production используем относительный путь
    return "/api"
  }

  // В development используем переменную окружения или localhost
  return import.meta.env.VITE_API_URL || "http://localhost:5000/api"
}

export const API_BASE_URL = getApiUrl()

// Дополнительно можно экспортировать готовый axios instance
import axios from "axios"

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 секунд таймаут
})

// Добавляем interceptor для логирования (опционально)
api.interceptors.request.use(
  (config) => {
    console.log(`🔄 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error("❌ API Request Error:", error)
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error("❌ API Response Error:", error.response?.status, error.message)
    return Promise.reject(error)
  },
)