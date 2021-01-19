// 6. Write a JavaScript function to truncate a string to a certain number of
// words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"


function truncate(str,n){
    let arr=[];
     arr=str.split(" ");
     var result="";
     for(let i=0;i<n;i++){
      result=result+" "+arr[i];
     }
    return result;
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4))