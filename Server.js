require('dotenv').config()
const express = require('express')
const cors = require('cors')

const sentimientoRoutes = require('./Routes/sentimientoRoutes')

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Azure - TAREA 07',
        endpoints: {
            sentimiento: 'POST /api/sentimiento/analizar'
        }
    })
})

app.use('/api/sentimiento', sentimientoRoutes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})