const db = require('./../bootstrap/mysql')

class WebController{

	constructor() {

	}

	index(req, res) {
		db.query('SELECT * FROM users', function (error, results, fields) {
		  if (error) throw error;
		  res.json(results);
		});
	}
}
module.exports = new WebController