var bodyParser 	= require('body-parser'),
	users = require('../controllers/users');

module.exports = function (app, express) {

	var router = express.Router();

	router.route('/users')
  		.get(users.index)

	return router;
}
