const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('welcome');
})

const MAX_COOKIE_AGE = 1000 * 60 * 60 * 24 * 7

module.exports = router; 