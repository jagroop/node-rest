const db = require('./../bootstrap/mysql')
const validator = require('validator')
class WebController{
	
	constructor() {

	}
	
	index(req, res) {
		const node_app = {app : "node-rest", developer : "Jagroop Singh"}
		res.json(node_app)
	}
	
	users(req, res) {
		db.query('SELECT * FROM users', function (error, results, fields) {
		  if (error) throw error
		  res.json(results)
		});
	}

	create(req, res) {
		res.json(validator.isEmpty(req.body.name))
	}
}
module.exports = new WebController