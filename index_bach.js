var express = require("express");

var app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("server is running..");
});
app.use(express.static("public"));
app.set("view engine","ejs");

var fs =require("fs");

app.get("/men",function (req,res) {
    var list_image = fs.readFileSync("data/bach.json");
    var image = JSON.parse(list_image);
    res.render("men_bach.ejs",{
        data: image
    });
});