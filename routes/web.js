const router = require('express').Router()
const web = (require('./../controllers/WebController'))
router.get('/', web.index)
module.exports = router