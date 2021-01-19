// 7. Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."


function search_word(str,word){
    let cont=0;
    let arr=[];
     arr=str.split(", ")
     console.log(arr)
for(let i=0;i<arr.length;i++){
console.log(word);
    if(arr[i]===word){  
         cont=cont+1;
    }
}
return "'"+word+"'"+" was found "+cont+" times";
}
console.log(search_word('The quick brown fox', 'fox'))
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
