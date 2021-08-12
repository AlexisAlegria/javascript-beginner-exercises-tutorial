var x = 99;

var text1 = "bottles of milk on the wall, "
var text2 = "bottles of milk. Take one down and pass it around, "
var text3 = "bottles of milk on the wall."
var text4 = "bottle of milk on the wall."

var text5 = "bottle of milk on the wall, "
var text6 = "bottle of milk. Take one down and pass it around, no more bottles of milk on the wall."

var text7 = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, "

    var i = 99;
    while(i>0){
        
    if(i!=1){
            console.log(i + " " + text1 + i + " " + text2 + (i-1) + " " + text3);
        } else {
            console.log(i + " " + text5 + i + " " + text6);
        }
        i--;
    }
    console.log(text7 + x + " " + text3);
