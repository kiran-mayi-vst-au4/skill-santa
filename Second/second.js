// 2. Write a JavaScript for a loop that will iterate from n times. For each
// iteration, it will check if the current number is odd, even or prime, and
// display a message on the screen
// a. "0 is even"
// b. "1 is odd"
// c. "2 is even and prime"
// d. “3 is odd and prime”
// e. “4 is even”

var numbersDiv=document.getElementById('numbers-div');
function chheck(n){
    
    for(let i=1;i<=n;i++){
        if(i%2===0){
           let count=0;
           let divider=2;
            while(divider<i){
               if(i%divider===0){
                   count++;
               }
               divider=divider+1;
            }
            if(count===0){
        let para=document.createElement('p');
        para.id=i;
        para.innerText=i+" is Even and Prime"
        numbersDiv.append(para);
        }
        if(count>0){
            let para=document.createElement('p');
            para.id=i;
            para.innerText=i+" is Even"
            numbersDiv.append(para);
        }
    }
        if(i%2===1){
            let count=0;
            let divider=2;
             while(divider<i){
                if(i%divider===0){
                    count++;
                }
                divider=divider+1;
             }
             if(count===0){
         let para=document.createElement('p');
         para.id=i;
         para.innerText=i+" is Odd and Prime"
         numbersDiv.append(para);
         }
         if(count>0){
             let para=document.createElement('p');
             para.id=i;
             para.innerText=i+" is Odd"
             numbersDiv.append(para);
         }
           
        }
    }
}
chheck(10);