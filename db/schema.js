// requiring mongoose dependency
var mongoose = require('mongoose')

// instantiate a name for our Schema
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

// defining schema for bookmarks
var BookmarkSchema = new Schema({
  url: String,
  name: String
})

// defining schema for users
var UserSchema = new Schema({
  name: String,
  bookmarks: [BookmarkSchema]
})

// setting models in mongoose utilizing schemas defined above, we'll be using
// these frequently throughout our App
mongoose.model("User", UserSchema)
mongoose.model("Bookmark", BookmarkSchema)
