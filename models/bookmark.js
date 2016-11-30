require("../db/schema")
var mongoose = require('mongoose')

var BookmarkModel = mongoose.model("Bookmark")
module.exports = BookmarkModel
