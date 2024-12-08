const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const posts = [];
app.get("/", function(req, res){
res.render("Home", {starting: startingcontent,
posts: posts
});

});



app.get("/post/:topic", function(req, res){
  console.log(req.params.topic);
})

app.get("/about", function(req, res){
  res.render("about");
})
app.get("/contact", function(req, res){
  res.render("contact");
})
app.get("/compose", function(req, res){
  res.render("compose");
})
app.post("/compose", function(req, res){
var post = {
  Title: req.body.compose,
  content: req.body.text,
}
posts.push(post);
res.redirect("/");

})








let startingcontent = "This is a blog website where you get the latest news";
app.listen(3000, function (req, res) {
  console.log("server is working on port 3000");
});