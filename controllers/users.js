var mongoose 	= require('mongoose'),
  User 	= mongoose.model('User');

exports.index = function (req, res) {

  // seetings
  var page = 1;
  var per_page = 10;
  var total = 0;

  if (req.query.page) page = req.query.page;

  var query = {};
  var search = req.query.search;

  if (search) {
   var regex = new RegExp(search, "i");
   var query = { fullName: regex };
  }

  // Find
  User.find(query, function (err, users) {

  if (err) res.json({ data: [], err: "Error" });

    User.count(query, function (err, total) {

      if (err) res.json({ data: [], err: "Error" });

      res.json({ data: users, count: total });
    });

  }).sort('-firstName').skip((page-1)*per_page).limit(per_page);

}
