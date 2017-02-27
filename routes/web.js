const router = require('express').Router()
const web = require('./../controllers/WebController')

router.get('/', web.index)
router.get('/users', web.users)
router.get('/create', web.create)

module.exports = router