// Write a JavaScript program to construct the following pattern, using a
// nested for loop.
// * * * * *
// * * * *
// * * *
// * *
// *
var patternDiv=document.getElementById('pattern-div')
function pattern(n){
for(let i=5;i>=1;i--){
    let strin="";
for(let j=1;j<=i;j++){
  strin=strin+"*";
}
let p=document.createElement('p');
p.innerText=strin;
let br=document.createElement('br');
patternDiv.append(p);
patternDiv.append(br);
console.log(strin);
}
}

pattern(5);
