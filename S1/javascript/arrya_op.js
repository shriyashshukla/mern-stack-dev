const nums=[1,5,7,6,23,89,75,32];
// program to square eeach element of array

const res = nums.map((n)=>{return n**2});
console.log(res);



//program to divide each element of array by 2
const res2 = nums.map((n)=>{return n/2});
console.log(res2);
const prices =['$43.99','$9.20','$992.50','$34.99'];


// program to convert eeach elemnt of array to integr 
console.log(parseInt('$43.99'.slice(10)));
const res3=prices.map((p)=>{return parseInt(p.slice(1))});
console.log(res3);
const res4= nums.map((n)=>{return n%2===0 ? n/2:n3});
console.log(res4);


const filterArr1=nums.filter ((a)=>{return a%2===0});
console.log(filtrArr1);

const prices2=[345,299,788,1024,99,291,124,3821,800];
// filter out prices greater than 500
// filteere out price which is not perfect square


