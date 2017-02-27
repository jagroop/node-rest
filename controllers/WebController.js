'use strict'

const db = require('./../bootstrap/mysql')

const indicative = require('indicative')

class WebController {
	
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
		const rules = {
		  username  : 'required|alpha_numeric',
		  email     : 'required|email',
		  password  : 'required|min:6|max:30'
		}

		const data = {
		  username  : 'jagroopsingh',
		  email     : 'doe@example.org',
		  password  : 'doe123456'
		}

		const messages = {
			'username.required' : 'The username field is required.'
		}

		indicative.validateAll(data, rules, messages)
		.then(function () {
		  res.send('validation passed')
		})
		.catch(function (errors) {
		  res.status(400).json(errors)
		})
	}
}
module.exports = new WebController