const router = require('express').Router()
const web = require('./../controllers/WebController')

router.get('/', web.index)
router.get('/users', web.users)

module.exports = router