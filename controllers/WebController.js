const db = require('./../bootstrap/mysql')

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
}
module.exports = new WebController