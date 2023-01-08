'use strict';

const express = require('express');
const router = express.Router();
const tags = require('../../../config/localConfig').tags;

// Obtener lista de tags
router.get('/', function (req, res, next) {

    return res.json({sucess: true, data: tags});
});

module.exports = router;
