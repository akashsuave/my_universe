

//  /* javsscript practising */






// // let letters = ["a", "d", "a", "d", "b", "a", "d", "c", "b", "a"];
// // let count = [];
// // letters.forEach(items => {
// //     if(count[items]){
// //         count[items]++;
// //         console.log(count);
// //     }
// //     else{
// //         count[items] = 1;
// //     }

// // })
// // console.log(count);


// // let numbers = [5, 10, 20, 30,];

// // numbers.forEach((item, index) => {
// //     console.log(`iteam is ${item} and index is ${index}`);
// // })
// // console.log(numbers);
 

// // another example for map method

// let products = [
//     {
//         name: "dell",
//         price: 10000,
//         count: 3
//     }, {
//         name: "aspire",
//         price: 20000,
//         count: 4
//     }, {
//         name: "microSoft",
//         price: 40000,
//         count: 1
//     }
// ];

// let totalProductValue = products.map(item => {
//     return item.price * item.count
// })
// console.log(totalProductValue);




// // another example for filter method
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let even = numbers.filter(item => {
//     return item % 2 === 0; // to find even numbers and to find odd numbers remove === 0
// });
// console.log(even);





// // another example
// let people = [
//     {
//         name: "akash",
//         age: 24
//     }, {
//         name: "rahul",
//         age: 27
//     }, {
//         name: "dcrux",
//         age: 18
//     }, {
//         name: "surya",
//         age: 15
//     }, {
//         name:"aakaash",
//         age: 14  
//     }
// ];

// let adult = people.filter(item =>  item.age >= 18
// );
// console.log(...adult);







// // another example //in this program we will remove the duplicates and arrange the remenine

// let numbers1 = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7,8];

// let sortIt = numbers1.filter((item, index, array) => {
//     return array.indexOf(item) === index;
//          /*         1       */    /* 2  */
//    // in the above line  the '1' program is to find the index of the item once we run the peogram the place of the item is filled with the array values like 1 , 2, 3 etc but the starting point the item is filled with the first value 1 and after that we find the index of the item because we include the indexOf(1) infront of the bracket and we are going to find the index of the item 1 and the index of the item 1 is 0 , and and the index of 2 is 0 , and index of 3 is 0 too but after that the 4th value comes the indexOf 1 is 1 because the first one alredy comes and in the "2nd" statment the indexOf(item) === index if the item comes the first time the index is 0 and if the same number comes second time its index is 1                    
// });
// console.log(sortIt);







// // another example for reduce
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let total = numbers2.reduce((accumulator, item) => {
//     return accumulator + item;
// });
// console.log(total);








// // another example
// let food = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumTotal = food.reduce((currentTotal, item) => {
//     return currentTotal + item;
// } ,1); 
// console.log(sumTotal);






// // another example 
// let numbers3 = [10, 2, 3, 4, 5, 6, 7];

// let max = numbers3.reduce((accumulator, item) => {
//     if(accumulator > item){
//         return accumulator;
//     }
//     else{
//         return value;
//     }
// }/* 1 */);// in this example we cant give avalue in the "1"
// console.log(max);






// another example

// let store = [
//     {
//         product: "laptop",
//         value: 10000,
//         count: 3
//     }, {
//         product: "tab",
//         value: 1000,
//         count: 2
//     }, {
//         product: "phone",
//         value: 20000,
//         count: 1
//     } 
// ];

// let totalValuStore = store.reduce((accumulator, item) => accumulator + (item.value * item.count), 0);
//  console.log(totalValuStore);

//we can use the regular way also
 /* let totalValuStore = store.reduce((accumulator, item) => {
    return accumulator + item.value * item.count
} , 0);
console.log(totalValuStore); */

// let numbers3 = [10, 2, 3, 4, 5, 6, 7];

// let max = numbers3.reduce((accumulator, item) => {
//     if(accumulator > item){
//         return accumulator;
//     }
//     else{
// //         return value;
// //     }
// // });
// // console.log(max);


// let store = [
//     {
//         product: "laptop",
//         value: 10000,
//         count: 3
//     }, {
//         product: "tab",
//         value: 1000,
//         count: 2
//     }, {
//         product: "phone",
//         value: 20000,
//         count: 1
//     } 
// ];

// let fullValueOfStore =  store.reduce((accumulator, item) =>
//  accumulator + (item.value * item.count) , 0);

// console.log(fullValueOfStore);

// slice()
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//let firstName = numbers.slice(-3); // this will select the last 3 elements
let firstName = numbers.slice(0, 3);

console.log(firstName);


//another example

let participants = ["akash", "surya", "dcrux", "rahul", "kishore", "apata", "mohseen", "indu"];

let winners = participants.slice(0, 3);
console.log(winners);


