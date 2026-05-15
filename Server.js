require('dotenv').config()
const express = require('express')
const cors = require('cors')

const sentimientoRoutes = require('./Routes/sentimientoRoutes')
const ocrRoutes = require('./Routes/ocrRoutes')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Azure - TAREA 07',
        endpoints: {
            sentimiento: 'POST /api/sentimiento/analizar',
            ocr: 'POST /api/ocr/leer'
        }
    })
})

app.use('/api/sentimiento', sentimientoRoutes)
app.use('/api/ocr', ocrRoutes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})