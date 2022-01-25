
var x = 10;
let text;

if (x <= 5){
    text = "x is less then 5";
} else if (x <= 10){
    text = "x is less then 10";
} else {
    text = "x is more then 10";
}
console.log(text);

var i = 10;
for( ; i-- ; ){
    console.log("%c" + i, "color: red;");
}

do{

    i ++;
    console.log("%c" + i, "color: blue;");

}while(i < 10);

console.log("%c x time i is equal to " + (i*x), "color:green");
console.log("%c x plus i is equal to " + (i+x), "color:green");