'use strict'

const express = require('express')
const router = express.Router()

router.use('/organization', require('./organization'))
module.exports = router
