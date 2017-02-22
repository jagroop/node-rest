const db = require('./../bootstrap/mysql')

class WebController{

	/**
	 * WebController Constructor
	 */
	constructor() {

	}

	/**
	 * Default route of the app
	 * @param  {object} req Request
	 * @param  {object} res Response
	 * @return {json}     Json
	 */
	index(req, res) {
		const node_app = {app : "node-rest", developer : "Jagroop Singh"}
		res.json(node_app)
	}

	/**
	 * Get All Users from users table
	 * @param  {object} req Request
	 * @param  {object} res Response
	 * @return {json}     Users list json format
	 */
	users(req, res) {
		db.query('SELECT * FROM users', function (error, results, fields) {
		  if (error) throw error;
		  res.json(results);
		});
	}
}
module.exports = new WebController