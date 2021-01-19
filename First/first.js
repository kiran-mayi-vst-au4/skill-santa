// 1. Write a JavaScript conditional statement to sort three numbers. Display an
// alert box to show the result.
// a. Sample numbers : 0, -1, 4
// b. Output : 4, 0, -1

function sort(n1,n2,n3){
let arr=[]
arr.push(n1)
arr.push(n2)
arr.push(n3)
let sortedArr =arr.sort((a,b)=>{
return b-a;
});
alert(sortedArr.join(","))
return sortedArr.join(",");
}
console.log(sort(0,-1,4))
