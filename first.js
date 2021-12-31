// alert("Hello Javascript");

// console.log("Im building the JS")

// let firstname = "ragul"; // string

// let age =24; //Integer / number

// let isYoung = true; // boolean 

// let lastname = undefined;//undefined

// let trophy = null // null


// let gender ='female';

// let address ="trichy,tamil nadu , india";

// let person ={
//     name:"ragul",
//     age:22,
//     gender:"male",
//     address:"trichy ,tamilnadu, india"
    
// }

// // dot Notation
// console.log(person.age)

// // bracket Notation 
// console.log(person['gender '])

// let israining = false;
// let iscloudy =true;

// if(israining || iscloudy){
//     console.log("Dont forget to take umbrella");
// }
// else{
//     console.log("sky is normal!Enjoy the weather!");
// }

// If hour is between 12 am to 12pm --> Good morning

// Else if hour is between 12pm to 5pm --> good afternoon
// else hour is between 5pm to 12am --> good evening
// let hour = new Date();

// console.log(hour.getHours());

// if(hour >= 0&& hour <=12)
//     console.log("good morning");
// else if(hour >= 12 && hour <=17)
//     console.log("good afernoon");
// else
//     console.log("good evening");




// let name ='raju'
// let age = 23;
// let interest =['music'];

// let address ={
//     city: "trichy",
//     state: "Tamilnadu",
// }

// let person = {
//     name: 'raju',
//     age: 23,
//     interest:['music'],
//     isAlive: true,
//     address: {
//         city: "Chennai",
//         state: "Tamil nadu",
//     }
// };
//FACTORY FUNCTION
// function createPerson(name){
//     return {
//         name,
//         greeting() {
//             let msg ='My name is $(this.name)';
//             console.log(msg);

//         }
//     };
//     }

// constructor functions

// function Person(name){
//     this.name = name;
//     this.greeting = function(){

//     }
// }


// // dynamic object 

// const person = {
//     name: "raju"
// }

// person.age = 24;
// person.greeting = function(){}

// delete person.greeting;
// console.log(person);

// let name = "Raju"; 
// let age = 20;
// let isAlive = true;

// console.log(name,age,isAlive);



// function Person(name){
//     this.name = name;
//     this.greeting = function() {
//         console.log('my name is ${this.name}');

//     }
// } 


let cart = 5;

 function updateCart(cart){
     cart++;
 }

 updateCart(cart);

 console.log("Carts available:" + cart);