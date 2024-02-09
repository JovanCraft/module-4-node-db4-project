const express = require('express')
const { getRecipeById } = require('./model')// eslint-disable-line
const router = express.Router();


router.use('*', (req, res, next) => {// eslint-disable-line
    res.json({ api: 'up Up UP!!' })
})






module.exports = router;
