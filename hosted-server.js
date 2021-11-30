"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('Hello from Heroku');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("App is listening on port ".concat(PORT));
});
