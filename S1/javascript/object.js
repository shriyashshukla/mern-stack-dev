/*let names = ["sdajskd", "sakjd", "sdasda"];

let userDetails = ['ram', 'j@gmail.com', 8923748938, 2];
let user = {
    name: "ram",
    email: 'j@gamil.com',
    phone: '8923748938',
    age: 2
};
console.log(user.name);

user.pasword = 'adadad';
user.address = 'lucknow';

console.log(user);

let smartphone = {
    brand: 'samsung',
    model: 'S23',
    price: 70000,
    color: ['black', 'white', 'black'],
    features: {
        cpu: 'sd 865',
        ram: '8bg',
        sotrage: '128bg',

    }
};

console.log(Object.keys(smartphone));
console.log(Object.values(smartphone));

// syntax to access third color from smartphone

console.log(smartphone.color[2]);

smartphone.color[2] = 'grey';
console.log(smartphone.color[2]);


// synatx to change the cpu of smartphone to 'sd 880'
smartphone.features.cpu = "sd 880";
console.log(smartphone.features.cpu)*/


// display all the keys object of it 

let smartphone = [
    {
        brand: 'samsung',
        model: 'S23',
        price: 70000,
        color: [ 'white', 'blue'],
    },
    {
        brand: 'oneplus',
        model: '3',
        price: 80000,
        color: ['black', 'white', 'gray'],
    }, 
    {
        brand: 'Mi',
        model: 'j2',
        price: 90000,
        color: [ 'white', 'pink'],


    },
    {
        brand: 'apple',
        model: '11',
        price: 1120000,
        color: ['yellow', 'white', 'red'],


    },
];

// change the price 2nd phone to 350000
smartphone[1].price='35000';
console.log(smartphone[1].price);



    
// add a new color to first phone
smartphone.at(-2).color.push('white');
console.log(smartphone.at(-2).color);
console.log(smartphone);


//use a for of loop to last 2nd phone
let count= 0;
for(let phone of smartphone){
    if(phone.price<50000) 
    count++;
}
 console.log(count);


 


 // use map get an array of all the brands of smartphone

 let brand = smartphone.map((phone)=>{return phone.brand});
 console.log(new Set(brand));
let phone1=smartphone.filter((phone)=>{return phone.price<5000})
console.log(phone1);

let phone2=smartphone.filter((phone)=>{return phone.color.includes('yellow')})
console.log(phone2);

 // use filter get all smartphone having price less than 50000
 // use filter get all smartphone having color black 




