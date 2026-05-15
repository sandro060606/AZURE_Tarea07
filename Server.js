require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const sentimientoRoutes = require('./Routes/sentimientoRoutes')
const ocrRoutes = require('./Routes/ocrRoutes')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html/index.html')) 
})

app.get('/sentimientos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html/sentimiento.html'))
})

app.get('/ocr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html/ocr.html'))
})

app.use('/api/sentimiento', sentimientoRoutes)
app.use('/api/ocr', ocrRoutes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})