class WebController{
	constructor() {

	}

	index(req, res) {
		res.send('Test')
	}
}
module.exports = new WebController