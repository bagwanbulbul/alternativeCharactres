var raw_input = require('readline-sync').question
function alternatingCharacters(s){
    let result = 0;
    let arr = s.split("");
    for (var i=0; i<arr.length; i++){
        if (arr[i]==arr[i+1]){
            result = result+1
        }
    }
    console.log(result)
    return result;
}
var str = raw_input("enter characters")
alternatingCharacters(str)

