

// x = Math.round(x)
//x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(y); // distance away from zero
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);
// a = Math.PI;

// console.log('length of the user name =', userName.length);// it will find the length of the userName
// console.log('charAt of 6 =', userName.charAt(6));// it healps to find out the number value of a letter usaly for computers numbers starts from 0 1 2 3 4 5 6 
// console.log('indexOf "0" =', userName.indexOf("o"));//to find the letter of the number we need use the indexOf but the value has to be inside the string " "
// console.log('lastIndexOf "0" =', userName.lastIndexOf("o"));// it will helps to find the last "o" in the userName
// console.log('trim of the lastName =', lastName.trim());
// console.log('upperCase =', userName.toUpperCase());// to transform the lower case into uppercase
// console.log('lawerCase =', userName.toLowerCase());// to transform uppercase into lowercase
// console.log(phoneNumber);
// console.log(phoneNumber.replaceAll("-", ""));// with the replaceAll we can replace value with the other
// console.log(typeof phoneNumber);


/* let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");
width = Number(width);
height = Number(height);

area = getArea(width, height);
console.log(area);

function getArea(width, height){

    return width + height;
  
} */


// let myNum = 0;
// while(myNum <= 5){
//     console.log("my number is   " + myNum);
//     myNum++;
// }


 // do{
 //     console.log(myNum);
 //     myNum++;
 // }while(myNum <= 10)
    
// console.log("============================");

// for(myNum = 0; myNum <= 6; myNum++){
//     console.log("my number is   " + myNum);
// }



// let a;
// let b;
// let c;

 //a = window.prompt("Enter a side");
 //a = Number(a);

// a = Number(window.prompt("enter your A"));
// console.log(a, typeof a);

// b = Number(window.prompt("enter your B"));
// console.log(b, typeof b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c, typeof c);

// let userName = "Akash dcrux";
// let lastName = "  aakaash  ";
// let phoneNum = "120-130-140";

// console.log(userName.length);
// console.log('the charAT value of 10 is  ',userName.charAt(10));
// console.log(userName.indexOf("x"));
// console.log(userName.lastIndexOf("a"));
// console.log(lastName.trim());
// let firstName = lastName.toUpperCase().trim();
// console.log(firstName);
// phoneNum = phoneNum.replaceAll("-", "*+");
// console.log(phoneNum);


// let sirName = "surya akash";
// let lastName;
// let firstName;

// firstName = sirName.slice(0, sirName.indexOf(" "));
// lastName = sirName.slice(sirName.indexOf(" ")).trim();
// console.log(firstName);
// console.log(lastName);


// let old = 98;

// if(old >= 90){
//     console.log("you are a super senior");
// }
// else if(old >= 65){
//     console.log("you are  a seanior citizen")
// }
// else if(old >= 35){
//     console.log("you are an uncle");
// }
// else if(old >= 18){
//     console.log("you are an adult")
// }
// else{
//     console.log("you are a child");
// }



// let grade = 40;

// switch(true){
//     case grade >= 90:
//         console.log("you did great!");
//         break;
//     case grade >= 80:
//         console.log("you did good");
//         break;    
//     case grade >= 70:
//         console.log("you did okay");
//         break;
//     case grade >= 40:
//         console.log("you are passed");
//         break;    
//     case grade < 40:
//         console.log("you FAILD!");
//         break;
//     default:
//         console.log(grade, "is not a letter grade");            
// }


// let userName = "";

// while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
// }
// alert(`you are ok ${userName}`)


// for(let userName = "";userName == "" || userName == null; userName = window.prompt("Enter your name")){
//     alert(`enter your name`)
    
// }


// let count = 1;
// let total = 0;
// for(let num = 1; num <= 10; num+=1){
//     console.log(num);
//      total += num;
//      console.log(`${count}) ${total}`);
//      count+=1;
     
     
// }
// console.log(total);




// let container = ["apple", "orange", "mango", "kevi", "banana", "papaya", "ice apple", "custerd apple", "chery", "goa"];

// console.log(container[0]);

// let count = 0;
// for(let num = container.length - 1; num >= 0 ; num-=1){
//     count+=1;
//     console.log(`${count}) ${container[num]}`);
// }

// let count = 0;
// for(let num = 0; num <= container.length - 1 ; num+=1){
//     count+=1;
//     console.log(`${count}) ${container[num]}`);
// }



// let count = 0;
// let num = container.length - 1;

// while(num >= 0){
//     count+=1;
//     console.log(`${count}) ${container[num]}`);
//     num-=1;
// }


// function happyBirthDay(){
//     console.log("Happy Birth Day to you!");
//     console.log("Happy Birth Day to you!");
//     console.log("Happy Birth Day dear");
//     console.log("Happy Birth Day to you!");
//     console.log("you are  year old");

// }

// let guessess = 1;
// let guess;

// document.getElementById("myBtn").onclick = function(){
//     const answer = Math.floor(Math.random() * 10 + 1);
//     console.log(`${guessess}) ${answer}`);
//     guessess+=1;
    
//     guess = document.getElementById("myGuess").value;
    
//     if(guess == answer){
//         document.getElementById("myOut").innerHTML = `${guessess}) ${guess} is the right answer, it took you ${guessess} chances`;
//         console.log(`${guessess}) ${guess} is the right answer, it took you ${guessess} chances`);
//     }
//     else if(guess < answer){
//         document.getElementById("myOut").innerHTML = `too small`; 
//     }
//     else if(guess > answer){
//         document.getElementById("myOut").innerHTML = `too high`;
//     }
//     else{
//         document.getElementById("myOut").innerHTML = `"${guess}" is not a number`;
//     }

    
// }



// document.getElementById("myBtn").onclick = function(){

//     let temp = Number(document.getElementById("myTemp").value);
  
//    console.log(`${temp} ${typeof temp}`);

//  if(document.getElementById("myCelsius").checked){
//     temp = toCelsius(temp);
//     document.getElementById("myOut").innerHTML = `${temp} celsius`;

//  }
//  else if(document.getElementById("myFahrenheit").checked){
//     temp = toFarenheit(temp);
//     document.getElementById("myOut").innerHTML = `${temp} farenheit`;

//  }
//  else{
//       document.getElementById("myOut").innerHTML = `select a element`;
//  }

// }

// function toCelsius(temp){
//     return (temp - 32) * (5/9);
// }

// function toFarenheit(temp){
//     return temp * 9 / 5 + 32;
// }

// let fruit = ["apple", "orange", "mango"];
// let vege = ["onion", "tomato", "carrot"];
// let meats = ["fish", "chicken", "beaf"];

// let groceryList = [fruit, vege, meats];

//  groceryList[2][2] = "pork";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }


// // a .map function executes a provided callback function once for each array element and create a new array
// let numbers = [1, 2, 3, 4, 5 ];//we create a set of numbers in a array 
// let squares = numbers.map(square);// in hear we use a map function to  send  an element to a function and get a result
// let cubes = numbers.map(cube);
// cubes.forEach(print);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }
// function print(element){
//     console.log(element);
// }



// let grades = ['30', '40', '50', '60', '70', '80', '90', '100'];

// let valu = grades.sort(ascendingSort);
// let valu = grades.sort(desendingSort);// in heare we are sort in ascending and desenting order
// valu.forEach(print);

// function ascendingSort(x, y){
//     return x - y;
// }
// function desendingSort(x, y){
//     return y - x;
// }
// function print(element){
//     console.log(element);
// }


//Stage: 1 form
let con = function(){// we dont need to name the function we use it on the
    console.log("Hellow");
}
con();


//Stage: 2 form
// let count = 0;

// function increaseCount(){
//     count+=1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// function decreaseCount(){
//     count-=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

//Stage: 3 form
let count = 0;
document.getElementById("increaseCount").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
    
}
document.getElementById("decreaseCount").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
    
}





