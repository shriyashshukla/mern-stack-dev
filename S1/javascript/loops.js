for(let i=0;i<10;i++){
    console.log(i);
}

// wap to print all number divisible by 7 and 11 in the rang of 50-1000



    // program to check if a number is perfect square.
    let n=25;
    const sqrt = n**0.5;
    if(sqrt==parseInt(sqrt)){
        
    }else {
        console.log('not a perfect square')
    }


    // while loop
    
    let mynum=5;
    while(mynum <=20){
        console.log(mynum);
        mynum+=2;
    }
console.log(mynum);

// do while

/* mynum=5;
    while(mynum <=20){
        console.log(mynum);
        mynum+=2;
    }
do{
    console.log("mynum");
}while(mynum >10);*/

// wap to reverse digits of a number

let m= 678678678;
let rev=0;

while(m>0){
    let d =m%10;
    rev = rev*10+d;
    m=parseInt(m/10);
}
 console.log(rev);
        

