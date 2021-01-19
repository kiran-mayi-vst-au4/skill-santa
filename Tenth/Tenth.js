// Write a JavaScript function that takes a string which has lower and upper
// case letters as a parameter and converts upper case letters to lower case,
// and lower case letters to upper case.


function upperAndLower(str){
    let r="";
for(let i=0;i<str.length;i++){
    if(str[i]===str[i].toUpperCase()){
        r=r+str[i].toLowerCase();
    }
    else if(str[i]!==str[i].toLowerCase){
        r=r+str[i].toUpperCase();
    }
    else{
        r=r+str[i]
    }
}
return r;
}

console.log(upperAndLower("heY I'm KiRAn"))