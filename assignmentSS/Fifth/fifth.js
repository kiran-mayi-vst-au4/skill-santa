// var capp=document.getElementById('captilize');
function capitalize_Words(str){
let arr=[];
arr=str.split(" ");
for(let i=0;i<arr.length;i++){
    
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
// let p=document.createElement('p');
// p.innerText=arr.join(" ");
// capp.append(p);
return arr.join(" ");


}

console.log(capitalize_Words(('hi from skillsanta')))
// if you want to display it on the browser
//  please comment out line number 1,9,10,11 and
// remove console at 17th line and invoke the function
