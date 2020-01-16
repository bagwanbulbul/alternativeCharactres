var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/get',function(req,res){
    res.sendFile(path.join(__dirname+'/characters.html'));
  });

app.post("/post",function(req,res){
    let result =0; 
    let userInput = req.body.text
    let arr = userInput.split("");
    for (var i=0; i<arr.length; i++){
        if(arr[i]==ar[i+1]){
            result = result+1
            res.send(result)
        }

    }
})
app.listen(3000, () => console.log('server is listening 3000....'));











// var raw_input = require('readline-sync').question
// function alternatingCharacters(s){
//     let result = 0;
//     let arr = s.split("");
//     for (var i=0; i<arr.length; i++){
//         if (arr[i]==arr[i+1]){
//             result = result+1
//         }
//     }
//     console.log(result)
//     return result;
// }
// var str = raw_input("enter characters")
// alternatingCharacters(str)

