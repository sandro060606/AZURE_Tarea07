const express = require('express')
//Enrutador
const router = express.Router()

const sentimientoController = require('../controllers/SentimientoController')

router.post('/analizar', sentimientoController.analizarTexto)

module.exports = router