const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  //res.send('Hello Worls') // send to browser
  res.render('index')
})

module.exports = router