// 43// // enumerating properties of an object
// const employ = {
//     name: "varun",
//     age: 24,
//     getfullname() {
//         console.log("my name is ${this.name}");
//     }
// }

// for(let key in employ)
//     console.log(key, employ[key]);

// for(let key of Object.keys(employ))
//     console.log(key);
    
// for(let entry of Object.entries(employ))
//     console.log(entry);

// if('age' in employ)
//     console.log("yes!");
// else
//     console.log("no");


// Cloning an javascript object 

// const employ = {
//     name:"jack",
//     age: 24,
//     getfullname() {
//         console.log("my name is ${this.name}");
//     }
// }

// let another = Object.assign({gender:"male"},employ);
// console.log(another);

// math object

// let mark = [45,89,92,99,105,250,350,10,17,05,500]

// let result = Math.min(...mark);
//  console.log("minimum mark:" + result);

// 
// let firstname = "raju";
// let middlename = "rack";

// const firstName = new String("raju");

// // adding element to javascript array
//  const num = ["apple","orange"]

// // push
// num.push("grapes")

// console.log(num);

// const orders = [
//     {id:1, item: "Smartphones", quantity: 1},
//     {id:2, item:"Bulb",quantity:3},
//     {id:3, item: "watch", quantity: 2}, 

// ]
// let result = orders.find(function(order){
//     return order.item === "watch"
// })

// console.log(result);

// removing element in array

// const number =[1,2,3,4,5];

// number.pop()



// console.log(number);


// const shopping_cart = ["maggi","beans","masala"];
// const additional_cart = ["matchbox","salt"];

// //let recipe = shopping_cart.concat(additional_cart);

// let recipe =[...shopping_cart,...additional_cart];
// recipe.slice()


// console.log(recipe);


// const daily =["wake up","Eat","sleep"];

// daily.forEach(function(routine,RoutineIndex){
//     console.log(routine, RoutineIndex);  
// });


//  //const students =[2,3,4,5,6,7,8,9];

// // students.sort();
//  //students.reverse();

//  const students =[
//      {id: 3, name: "senthil"},
//      {id: 4, name: "guna"},
//      {id: 5, name: "bala"},
//      {id: 6, name: "rahul"}, 
//  ];

//  console.log(students);

// const queue_by_age = [15,32,25];

// let isAllowed = queue_by_age.every(function(value,index,array){
//  return value >=18;
// });

// console.log("isAllowed:", isAllowed);



//mapping a javascript array

// const people = [1,2,3,4,5,6,7,8,9];

// console.log(people);
// let final = people.map(function(val) {
//     return val * 3;
// });

// console.log(final)

// const people = [
//     {id: 1, first_name:"raj",last_name:"kumar"},
//     {id: 2, first_name:"arun",last_name:"kumar"},
//     {id: 3, first_name:"arvind",last_name:"raj"}
// ];


// let final = people.map(function(val) {
//    let fullname =[val.first_name, val.last_name].join("");
//    let obj = {id: val.id, fullname};
//     return obj;
// });

// console.log(final);

// Javascript chaining methods

// let products = [
//     { id: 1, title: "android pn", cost: 9000},
//     {id: 2, title: "gaming laptop", cost: 95000},
//     {id: 3, title:"headphone", cost: 3000},
// ];

// let sort = products.sort(function(a,b){
//     return b.cost-a.cost;
// });
// console.log(sort);

const donation =[45,58,78,98,485,452];

donation.reduce(function(previousVal,Currentval){

    console.log("previousVal",previousVal);
    console.log("Currentval",Currentval);

    return previousVal +Currentval;
});

donation.reduce(function(283,452) {
   
    return 283 +452;
});

