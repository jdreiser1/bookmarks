// requires mongoose dependencies
var mongoose = require('mongoose')
// connects us to the bookmarks database in mongoose
var conn = mongoose.connect('mongodb://localhost/bookmarks')
// require our model definitions we defined earlier
var UserModel = require("../models/user")
var BookmarkModel = require("../models/bookmark")
// removes any existing users and bookmarks from our database
UserModel.remove({}, function(err){
})
BookmarkModel.remove({}, function(err){
})

//instantiates 3 users and 6 bookmarks in memory(but not saved yet) and
//shoves them into arrays
var bob = new UserModel({name: "bob"})
var charlie = new UserModel({name: "charlie"})
var tom = new UserModel({name: "tom"})

var bookmark1 = new BookmarkModel({url: "http://www.espn.com", name: "ESPN"})
var bookmark2 = new BookmarkModel({url: "http://www.google.com", name: "Google"})
var bookmark3 = new BookmarkModel({url: "http://www.yahoo.com", name: "Yahoo"})
var bookmark4 = new BookmarkModel({url: "http://www.facebook.com", name: "Facebook"})
var bookmark5 = new BookmarkModel({url: "http://www.reddit.com", name: "Reddit"})
var bookmark6 = new BookmarkModel({url: "http://www.wikipedia.org", name: "Wikipedia"})

var users = [bob, charlie, tom]
var bookmarks = [bookmark1, bookmark2, bookmark3, bookmark4, bookmark5, bookmark6]

// iterate through the users to save them to the database after 2 bookmarks
// have been added as subdocuments to the bookmarks
for(var i = 0; i < users.length; i++){
  users[i].bookmarks.push(bookmarks[i], bookmarks[i+3])
  users[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("user was saved")
    }
  })
}
