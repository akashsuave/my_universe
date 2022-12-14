/* โญ๏ธTime Stampsโญ๏ธ
#1  (00:00:00) JavaScript tutorial for beginners ๐
#2  (00:08:02) variables โ
#3  (00:16:32) arithmetic expressions ๐งฎ
#4  (00:21:14) user input ๐งฎ
#5  (00:25:41) type conversion ๐ฑ
#6  (00:30:11) const โ
#7  (00:33:13) Math ๐ฃ
#8  (00:36:52) hypotenuse calc practice program ๐
#9  (00:43:12) counter program #๏ธโฃ
#10 (00:46:52) random number generator ๐ฒ
#11 (00:50:53) useful string methods ๐งต
#12 (00:55:13) string slicing โ๏ธ
#13 (00:59:08) method chaining โ๏ธ
#14 (01:01:03) if statements โ
#15 (01:05:24) checked property โ๏ธ
#16 (01:12:39) switches ๐
#17 (01:16:26) AND OR logical operators && ||
#18 (01:20:29) NOT logical operator โ
#19 (01:23:26) while loops ๐
#20 (01:26:14) do while loops ๐
#21 (01:28:36) for loops ๐
#22 (01:32:05) break and continue statements ๐
#23 (01:33:34) nested loops โฟ
#24 (01:38:05) functions โ๏ธ
#25 (01:42:43) return statement ๐
#26 (01:45:36) ternary operator โ
#27 (01:48:58) var vs let ๐ฅ
#28 (01:53:25) template literals ๐ฌ
#29 (01:57:47) format currency ๐ฒ
#30 (02:02:47) number guessing game ๐ข
#31 (02:06:55) temperature conversion program ๐ก๏ธ
#32 (02:15:49) arrays ๐
#33 (02:20:33) loop through an array โฐ 
#34 (02:23:16) sort an array of strings ๐๏ธ
#35 (02:24:50) 2D arrays ๐ 
#36 (02:29:14) spread operator ๐๏ธ
#37 (02:33:32) rest parameters ๐ค
#38 (02:37:09) callbacks ๐ค
#39 (02:41:58) array.forEach() ๐
#40 (02:45:19) array.map() โ๏ธ
#41 (02:48:10) array.filter() ๐๏ธ
#42 (02:50:21) array.reduce() ๐
#43 (02:52:33) sort an array of numbers ๐ 
#44 (02:54:41) function expressions ๐คซ
#45 (02:59:55) arrow function expressions ๐น
#46 (03:05:42) shuffle an array ๐
#47 (03:09:30) nested functions ๐ฃ 
#48 (03:12:47) maps ๐บ๏ธ
#49 (03:17:07) objects ๐
#50 (03:21:09) this keyword ๐
#51 (03:24:08) classes ๐จโ๐ซ
#52 (03:27:15) constructors ๐ท
#53 (03:30:48) static keyword โก
#54 (03:34:22) inheritance ๐ช
#55 (03:40:23) super keyword ๐ฆธโโ๏ธ
#56 (03:44:59) getters & setters ๐๏ธ
#57 (03:51:17) objects as arguments ๐ซ
#58 (03:53:44) array of objects ๐ฎ
#59 (03:56:52) anonymous objects ๐ญ
#60 (04:02:44) error handling ๐ค
#61 (04:07:27) setTimeout() โฐ
#62 (04:12:16) setInterval() โฒ๏ธ
#63 (04:14:48) Date objects ๐
#64 (04:24:08) clock program ๐ง
#65 (04:28:56) asynchronous โณ
#66 (04:31:17) console.time() โ
#67 (04:33:46) promises ๐ค
#68 (04:40:23) async ๐ฅ
#69 (04:43:12) await โ
#70 (04:46:44) ES6 Modules ๐ข
#71 (04:51:21) DOM intro โจ
#72 (04:54:50) element selectors ๐
#73 (05:03:35) DOM traversal ๐ณ
#74 (05:09:01) add/change HTML elements ๐
#75 (05:14:01) add/change CSS properties ๐จ
#76 (05:18:26) events ๐๏ธ
#77 (05:24:32) addEventListener() ๐
#78 (05:30:28) show/hide HTML elements ๐ก
#79 (05:35:28) detect key presses ๐๏ธ 
#80 (05:40:21) animations ๐๏ธ
#81 (05:49:40) canvas API ๐๏ธ
#82 (06:02:34) window ๐
#83 (06:08:43) cookies ๐ช
#84 (06:22:57) stopwatch program โฑ๏ธ
#85 (06:35:11) rock paper scissors game โ
#86 (06:46:46) tictactoe game โญ
#87 (07:05:43) snake game ๐ 
#88 (07:34:32) pong game ๐ */




// #2  (00:08:02) variables โ


//DECLARATION (var, let. const)

let firstname = 'bro';
let age = 21;
let student = true;


console.log('firstname: ', firstname);
console.log('age: ', age);
console.log('student: ', student);

// exam:1
document.getElementById('p1').textContent = 'Hello ' + firstname;
document.getElementById('p2').innerHTML = 'You are now ' + age + ' years old';
document.getElementById('p3').innerHTML = 'enrole = ' + student;


//#3  (00:16:32) arithmetic expressions ๐งฎ


// /* arethmetic expression */
// let students = 20;
// students = students + 1
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students % 3;
// console.log(students);

/* operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division
4. addition & subtraction */



/* #4  (00:21:14) user input ๐งฎ */


//========== How to accept user input =================================
// Easy way with a window prompt
// Difficult way html textbox


// Easy way with a window prompt
// let age1 = window.prompt("What's your age1?"); +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log('age1: ', age1);

// Difficult way html textbox
//exam:2
let username;

document.getElementById("myButton").onclick = function(){

        username = document.getElementById("firstname").value;
        console.log('username: ', username); 
        document.getElementById("myLabel").innerHTML = username;
}

//TYPE CONVERSION = CHANGE THE DATATYPE OF A VALUE TO ANOTHER 
//                   (STRING, NUMBER & BOOLEANS)
console.log('CHANGE THE DATATYPE OF A VALUE TO ANOTHER (STRING, NUMBER & BOOLEANS)');
 let value = window.prompt('How old are you?', 24); 
console.log(typeof value);
value = Number(value); // to chang string "" into Number use this
value += 1;
console.log(typeof value); //to identify wether it is a string , number or boolean
console.log('Happy Birthday! you are now ', value, 'years old');


//converting string to number
let x;
let y;
let z;

x = Number("3.16");
y = String(3.16);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



//============ variables are var, let and const ===============
// const = a variable that can't be changed
// for example 
const PI =  3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a Circle", 9);
radius = Number(radius);

// PI = 420.69;// if you assain const variable you can't change it in the next line

circumference = 2 * PI * radius;

console.log('The circumference of a Circle is ', circumference);

// =============== #7  (00:33:13) Math ๐ฃ =============
let a = 3.14;
let b = -3.14;
let c = 4;
let d = 10;
let e = 3;

console.log(Math.round(a));
console.log(typeof (a));
console.log(Math.floor(a)); //the floor function will round the value in down words
console.log(Math.ceil(a)); //the ceil function will round the value in up words
console.log('power of 3.14 is',Math.pow( a, 2)); //the power function is knothing but a power value 3.14 x 3.14 = 9.8596
console.log('square root of 3.14 is ',Math.sqrt(a)); //the sqrt function is the square root of 3.14
console.log('the abs value of -3.14 is ', Math.abs(b));
console.log('the maximum value of a,b,c and d is', Math.max(a, b, c, d)); // finding the maximum value
console.log('the manimum value of a,b,c and d is', Math.min(a, b, c, d)); // finding the manimum value
console.log('the pi value of 3 is ', e = Math.PI); // it is simelur to other finding the pi value means we only need to use this manner e = Math.PI



//#8  (00:36:52) hypotenuse calc practice program ๐


let f;
let g;
let h;

f = window.prompt("enter side f", 4);
f = Number(f);

g = window.prompt("enter side g", 5);
g = Number(g);

h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2));
console.log('side of h', h);



// same but little advance
// exam:3
document.getElementById("submitButton").onclick = function(){
    f = document.getElementById("aTextBox").value;
    f = Number(f);

    g = document.getElementById("bTextBox").value;
    g = Number(g);

    h = Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2));

    document.getElementById("cLabel").innerHTML = "Side h: " + h;

}
// same but little advance
// exam:3.1
let f1;
let g1;
let h1;

document.getElementById("mybtn").onclick = function(){

    f1 = Number(document.getElementById("sideA").value);
    document.getElementById("mySideA").innerHTML = `side A:  ${f1}`;

    g1 = Number(document.getElementById("sideB").value);
    document.getElementById("mySideB").innerHTML = `side B:  ${g1}`;

    h1 = Math.sqrt(Math.pow(f1, 2) + Math.pow(g1, 2));
    document.getElementById("sideC").innerHTML = `side C:  ${h1}`;
}



// Increase , decrease and reset button with functional value
//exam: 4

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;

}


//#10 (00:46:52) random number generator ๐ฒ finding a randum number 
//================================== exam:5 ==========================
let i = Math.floor(Math.random() * 6)+ 1 ; //in this statement we have to find a random number * 6 means getting a random number between 0 to 5 if we want to start from 1 means add  + 1 in the end to start from 1 
let j = Math.floor(Math.random() * 6)+ 1 ;
let k = Math.floor(Math.random() * 6)+ 1 ;

console.log("i =", i);
console.log("j =", j);
console.log("k =", k);


// another example for random number generator function 
// example: 5
let l;
let m;
let n;

document.getElementById("rollButton").onclick = function(){

     l = Math.floor(Math.random() * 6)+ 1 ;
     m = Math.floor(Math.random() * 6)+ 1 ;
     n = Math.floor(Math.random() * 6)+ 1 ;

     document.getElementById("lLabel").innerHTML = l;
     document.getElementById("mLabel").innerHTML = m;
     document.getElementById("nLabel").innerHTML = n;

}

/* Exam 5.1 */

document.getElementById("mtBtn").onclick = function(){
  
    document.getElementById("first").innerHTML = Math.round(Math.random() * 6) + 1;
    document.getElementById("second").innerHTML = Math.round(Math.random() * 6) + 1;
    document.getElementById("second2").innerHTML = Math.round(Math.random() * 6) + 1;
    document.getElementById("second3").innerHTML = Math.round(Math.random() * 6) + 1;
    document.getElementById("thired").innerHTML = Math.round(Math.random() * 6) + 1;
 }


//============================#11 (00:50:53) useful string methods ๐งต USEFULL STRING PROPERTIES AND METHODS ================

let userName = "Bro Code";
let lastName = "  aakaash   ";
let phoneNumber = "9597-0579-996";

console.log('length of the user name =', userName.length);// it will find the length of the userName
console.log('charAt of 6 =', userName.charAt(6));// it healps to find out the number value of a letter usaly for computers numbers starts from 0 1 2 3 4 5 6 
console.log('indexOf "0" =', userName.indexOf("o"));//to find the letter of the number we need use the indexOf but the value has to be inside the string " "
console.log('lastIndexOf "0" =', userName.lastIndexOf("o"));// it will helps to find the last "o" in the userName
console.log('trim of the lastName =', lastName.trim());
console.log('upperCase =', userName.toUpperCase());// to transform the lower case into uppercase
console.log('lawerCase =', userName.toLowerCase());// to transform uppercase into lowercase
console.log(phoneNumber);
console.log(phoneNumber.replaceAll("-", ""));// with the replaceAll we can replace value with the other
console.log(typeof phoneNumber);
// 'special one'
console.log(lastName.toUpperCase().trim);

//========================== METHOD CHAINING ====================
//calling one method after another in one continuous line of code

let assainName = "akash";

let letter = assainName.charAt(0).toUpperCase();

console.log('letter = ',letter);


//================== #12 (00:55:13) string slicing โ๏ธ STRING SLICING =========================

let fullName = "Akash suave";

// let firstName = fullName.slice(0, 5);
// let subName = fullName.slice(6, 11);


let firstName = fullName.slice(0, fullName.indexOf(" "));
let subName = fullName.slice(fullName.indexOf(" ") + 1);//in this line we are slicing the crux with the help of indexOf and the + 1 means after the gap because computers number starts from 0 1 2 so in this line the gap we finding is zero 

console.log('firstName =', firstName);
console.log('subName =', subName);


//+++++++++++++++ another example for string slicing +++++++++++
// example: 6
console.log("================= another example for string slicing ==================");
let sirName;
let firstName1;
let lastName1;


document.getElementById("findBtn").onclick = function(){
    sirName = document.getElementById("yourNam").value;
    firstName1 = sirName.slice(0, sirName.indexOf(" "));
    lastName1 = sirName.slice(sirName.indexOf(" ")).trim();

    console.log("your first name is ", firstName1);
    console.log("your last name is ", lastName1);

    document.getElementById("myFirstNam").innerHTML = `your first name is "${firstName1}"`;
    document.getElementById("myLastNam").innerHTML = `your last name is "${lastName1}"`;

    
}


//=================== #14 (01:01:03) if statements โ IF STATEMENT BASIC FORM ====================
//This is a basic form of IF Statement

let roleNumber = 70;


if(roleNumber >= 65){
    console.log("you are a Seanior Citizen");

}
else if(roleNumber >= 18){
    console.log("you are an Adult");
}
else if(roleNumber <= 0){
    console.log("you are Not Born yet!");
}
else{
    console.log("you are a Child");
}

//if statement with boolean value
let online =true;
if(online){
    console.log("The user is Online ");
} else{
    console.log("The user is OFFline");
}


//exam : 7
document.getElementById("mySubmitBtn").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaPay = document.getElementById("visaPay");
    const masterPay = document.getElementById("masterPay");
    const payPal = document.getElementById("payPal");

    if(myCheckBox.checked){
        console.log("You are Subscribed");

    }
    else{
        console.log("You are Not Subscribed");
    }
    if(visaPay.checked){
        console.log("you are paying with Visa Card");
    }
    else if(masterPay.checked){
        console.log("you are paying with Master card");
    }
    else if(payPal.checked){
        console.log("you are paying with PayPal");
    }
    else{
        console.log("select any one payment method");
    }
}


// ================= SWITCH statement ================
// switch statement that examines a value

let grade = "A";

grade = grade.toUpperCase();

switch(grade){
    case "A":
        console.log("you did great");
        break;
    case "B":
        console.log("you did good");
        break;
    case "C":  
        console.log("you did ok");
        break;   
    case "D":
        console.log("you passed ... barely");
         break;     
    case "F":
        console.log("you FAILED");
        break;   
    default:
        console.log(grade, "is not a letter grade!");    
}

//another example for the switch statement

let mark = 100;



switch(true){
    case mark > 100:
        console.log("the value you given is not a mark1");
    case mark >= 97:
        console.log("you are excelent");
        break;
    case mark >= 90:
        console.log("you did great");
        break;
    case mark >= 80:
        console.log("you did good");
        break;
    case mark >= 70:  
        console.log("you did ok");
        break;   
    case mark >= 40:
        console.log("you passed ... barely");
         break;     
    case mark < 40:
        console.log("you FAILED");
        break;   
    default:
        console.log(grade, "is not a letter grade!");    
}


// ================= && (and) , || (or) ,! (not)  operators =================
// && operators
//exam: 1
let temp = 20;
  
if(temp > 0 && temp < 30 ){
    console.log("The Weather is good");
}
else{
    console.log("The Weather is bad");
}

//exam: 1.1

let climate = -10;

switch(true){
    case climate >= 0 && climate <= 30:
        console.log("it's good to go out there");
        break;
    case climate < 0:
        console.log("it's cold out side");
        break;
    case climate > 30:
        console.log("it's worm out side");
        break;
    default:
        console.log(`&{climate} is not a climate`);            
}

//exam: 2
let temp2 = 20;
let sunny = true;
  
if(temp2 > 0 && temp2 < 30 && sunny ){
    console.log("The Weather is good");
}
else{
    console.log("The Weather is bad");
}

// || operator

let outTemp = 15;

if(temp <= 0 || temp >= 30){
      console.log('the weather is bad');
}
else {
    console.log("the weather is bad");
}



let climate1 = 15;

switch(true){
    case climate1 <= 0 || climate1 > 30:
        console.log("it's not good to go out there");
        break;
   
    default:
        console.log(`it's  good to go outside`);            
}



 
// (!) not operator

let temp3 = -15;

if(!(temp3 > 0)){
       console.log("It's Cold outside")
}
else{
    console.log("It's Warm outside")
}



// ================= WHILE LOOP =========================

let loopName = "";

while(loopName == "" || loopName == null){
  //     (1)                  (2)
  // (1) the first loop is for  the ok button if we didint give the value the loop will not end but we can click cancel for that the (2) second one
  // (2) the second one is for the cancel button without giving the value the loop will not end
    loopName = window.prompt("Enter your name" )
    
}

console.log('Hello = ', loopName);

// this is anothe one loop but dont exequit it , it will contuniously run again and again and it won't stop

// while(1 == 1){
//     console.log("Help! I'M Stuck in an Infinite Loop");
// }

// ====== BASIC WHILE lOOP ===========
let intel = 5;
while(intel > 0){
    console.log(intel);
    intel--;
}


// ============= DO WHILE LOOP ================

let doLoopName;

do{
 
    doLoopName = window.prompt("Enter your sir name" )
    
}
while(doLoopName == "" || doLoopName == null)

console.log('Hello = ', doLoopName);

// ============= FOR LOOP ================
for(let userName = "";userName == "" || userName == null; userName = window.prompt("Enter your name")){
    alert(`enter your name`)
    
}

//++++++++++++ another example array with for loop ++++++++
let container = ["apple", "orange", "mango", "kevi", "banana", "papaya", "ice apple", "custerd apple", "chery", "goa"];

console.log(container[0]);

// let count1 = 0;
// for(let num = container.length - 1; num >= 0 ; num-=1){
//     count1+=1;
//     console.log(`${count1}) ${container[num]}`);
// }

let count1 = 0;
for(let num = 0; num <= container.length - 1 ; num+=1){
    count1+=1;
    console.log(`${count1}) ${container[num]}`);
}


//============ BREAK and COUNTINUE ==============
console.log("BREAK and COUNTINUE");

 for(let i = 5; i <= 100; i+=5){
    if(i == 13 || i == 15){
        continue;
    }
    console.log( i);
 }
 console.log("it end's hear");
 // BREAK : break will break out of the loop entierly
 // COMTINUE : continue will skip only the number

 //=========== NESTED LOOP (NOT COMPLETED )(UNUNDERSTANSABLE)=================





 //==================== #24 (01:38:05) functions โ๏ธ FUNCTION ===============
 // define code once and use it many times 
 // to performe some code call the function name




 function startProgram(){

     let uName = "";
     let uAge;

     while(uName == "" || uName == null){
        uName = window.prompt("enter your uName");
     }
     while(uAge == "" || uAge == null){
        uAge = window.prompt("enter your uAge");
     }


     happyBirthday(uName, uAge);
 }



function happyBirthday(uName, uAge){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday dear", uName);
    console.log("Happy birthday to you!");
    console.log("you are ",uAge, " year old");
}

startProgram();


//================== #25 (01:42:43) return statement ๐ RETURN FUNCTION ================

let area;
let width;
let height;


width = window.prompt("enter the width");
height = window.prompt("enter the height");

// width = Number(width);
// height = Number(height);

 area = sampleFun( width, height);

function sampleFun(a, b){
    return a*b;
}
console.log(area);


//++++++++++++++++++ another example ++++++++++++

//Example: 8

 document.getElementById("myFindBtn").onclick = function(){
    let aWidth = document.getElementById("myWidth").value;
    let aHeight = document.getElementById("myHeight").value;

    aWidth = Number(aWidth);
    aHeight = Number(aHeight);
    
    let area = getArea(aWidth, aHeight);

    function getArea(aWidth, aHeight){
      /* 1 */  let result = aWidth * aHeight;
       /* 2 */ return result;/* there is an another simple way to do this insted of wrighting the two lines of code we can just type "return aWidth * aHeight" */
    }
   document.getElementById("myOutPut").innerHTML = "The area is  " +area;

}



//===================== #26 (01:45:36) ternary operator โ TERNARY OPERATOR ===========================
//shotcut for an if/elsestatement and switch statement

// condition with ? expression if true : expression if false;
let adult =  checkAge(22);


function checkAge(age){
  
    return age >= 18 && age <=25 ? true : false;
}
console.log(adult);

//++++++++++++++++++ another example ++++++++++++

let adult1 = checkAge(21);

function checkAge(age){
    // if(age >= 18){
    //     return true;           /* first method */
    // }
    // else{
    //     return false;
    // }

    // switch(true){
    //     case age >= 18:
    //         return true;      /* second method */
    //         break;
    //  default:   
    //  return false;    
    // }

    return age >= 18 ? true : false;        /* thired method */
}

console.log(adult1);

//++++++++++++++++++ another example +++++++++++

//Example: 9
document.getElementById("ageBtn").onclick = function(){
    let age = document.getElementById("whatAge").value;
 
    let major = whatAge(age);
 
    function whatAge(age){
     return age >= 18 && age <=25 ? `you are alowed` : 'you are not allowed';
    }
   document.getElementById("outData").innerHTML = major;
 }




//=================== #28 (01:53:25) template literals ๐ฌ TEMPLATE LITERALS ============================

let aName = "bro";
let items =3;
let total = 75;


console.log(/* instead of regular we useing this */ `Hello ${aName}`);
//in another uses 

let text = 
`Hello ${aName}<br>
you have ${items} items in your cart<br>
you total is $${total}<br>`;

console.log(text);

//++++++++++++++++++ another example ++++++++++++

//Example: 10
document.getElementById("myFind").onclick = function(){
    let userName = document.getElementById("myUser").value;
    let items = document.getElementById("myItem").value;
    let total = document.getElementById("myTotal").value;

    let aText = 
    `Hello ${userName}<br>
    you have ${items} items in your cart<br>
    you total is $${total}<br>`;

    document.getElementById("myResult").innerHTML = aText;
}

//=================== toLocaleString() ========================

let myNum = 100;
// myNum = myNum.toLocaleString("en-us"); // US English
// myNum = myNum.toLocaleString("hi-in"); // hindi INDIA

// myNum = myNum.toLocaleString("en-us", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-in", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString(undefined, {style: "percent"});// in percentage
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}); // in celsisu

console.log(myNum);


//===================== #30 (02:02:47) number guessing game ๐ข NUMBER GUESSING GAME ===================
//Example: 11
let guesses = 0;

document.getElementById("guessBtn").onclick = function(){

    const answer = Math.round(Math.random() * 10 + 1);
    console.log(`${guesses}) ${answer}`);
    

    /* 1 */let guess = document.getElementById("guessField").value;// in the tutorial the 1 and 2 is placed in the guesses that means outside the document container but if it's outside the problem is it only generate the randonm number only one time at once so i put the 1 and 2 inside the container then every single time we click the check button it generate a new number and it's hard to find the number
   /* 2 */ guesses+=1;

    if(guess == answer){
        document.getElementById("guessResult").innerHTML = `${answer} is the #. it took you ${guesses} guess`;
        console.log(`${guesses}) ${answer} is the right guess, it took you '${guesses}' guess`); 
    }
    else if(guess < answer){
        document.getElementById("guessResult").innerHTML = "Too small!";
    }
    else{
        document.getElementById("guessResult").innerHTML = "Too large!";
        
    }
}


//=================== #31 (02:06:55) temperature conversion program ๐ก๏ธ TEMPERATURE CONVERSION PROGRAM =====================

// basic problem

let aTemp = 320;
aTemp = toFahrenheit(aTemp);
console.log(aTemp);
function toFahrenheit(aTemp){
    return aTemp * 9 / 5 + 32;
}

//++++++++++++++++++ another example ++++++++++++
//Example: 12
   

document.getElementById("dBtn").onclick = function(){

    let temp = document.getElementById("yourDeg").value;
    temp = Number(temp);
    console.log(temp, typeof temp);

    if(document.getElementById("cDeg").checked){
      
      
        temp = toCelsius(temp);
        document.getElementById("dOut").innerHTML = `the temprature is ${temp} deg Hot`;

    }
    else if(document.getElementById("fDeg").checked){
        temp = toFahrenheit(temp);
        document.getElementById("dOut").innerHTML = `the temprature is ${temp} deg Hot`;
    }
    else{
        document.getElementById("dOut").innerHTML = `Please select any one of the radio button`;
    }

}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}

    //======================== ARRAY ===========================

  


    let fruits = ["apple", "orange", "banana"];

console.log(fruits[1]);            // to select and view any one specific elements
    
    fruits.push("lemon", "stawberry"); // add an element in last 
    fruits.pop();                      // to remove the last element
    fruits.unshift("mango");           // add an element in begining
    fruits.shift();                    // remove the begining element
    
    console.log(fruits);
    //  fruits[2] = "goa";             // replace one fruit with another one



//==================== LOOP THROUGH ARRAY ==================


let aFruits = ["apple", "banana", "oranbe", "chery", "goa"];
                /* 0 */   /* 1 */    /* 2 */  /* 3 */  /* 4 */
 
   /* A */ console.log(aFruits[2]); // finding a index of the variable

         /* 1 */        /* 2 */       /* 4 */
    for(let  i = 0; i < aFruits.length; i+=1){ // in the "aFruits.leangth" this is the leangth property to find the value of the variable so we are using it because if we increase the value in the aFruits based on the number of aFruits it will arange 
                                          // based on the numbers it will exicute in the A you can see with the help fo aFruits[3] we can find the index value of the variable like that in the "b" if the value of i is 0 means it will show the value of the 0 apple 
      /* 3 */
     /* B */ console.log(`${i})  ${aFruits[i]}`);
    }

//++++++++++++++++ anothe way to do this +++++++++

/* for(let c of aFruits){
    console.log(c);
  } */



  //=================== SORT AN ARRAY OF STRINGS ====================
  console.log("============= SORT AN ARRAY OF STRINGS ================");
  let bFruits = ["apple", "orange", "papaya", "stawbeary", "mango"];
                 /* 0 */   /* 1 */   /* 2 */    /* 3 */

 //bFruits = bFruits.sort(); // it healps to arrange the items in alphabetical order
 bFruits = bFruits.sort().reverse();//it healps to arrange the items in reverse alphabetical order
                
  for(let a of bFruits){
    console.log(a);
  }  

  //=========================== 2D ARRAY ==========================
  console.log("============= 2D ARRAY ================");
   /* colum */     /* 0 */    /* 1 */   /* 2 */  /* 3 */ /* 4 */  
let cFruits =     ["apple", "orange", "banana", "goa", "papaya"];/* 0 */ //ROWS
let vegetables = ["carrot", "onion", "potato"];                 /* 1 */
let meats =      ["eggs", "chicken", "fish", "pork"];           /* 2 */


let groceryList = [cFruits, vegetables, meats];

 groceryList[0][0] = "chery"; //replacing one item for another
 groceryList[1][2] = "ladis finger";
 groceryList[2][3] = "beaf";



for(let list of groceryList){
    for(let food of list){// this is 2D array an aray of array
      console.log(food);
    }
}

//====================== SPREAD OPERATOR ======================
console.log("============= SPREAD OPERATOR ================");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(...numbers); // spread operator it helps to spread the value
console.log(numbers.length);
console.log(Math.max(...numbers)); // with the help of the spread operator we can find the maximum number of numbers

let class1 = ["surya", "akash", "dcrux"];
let class2 = ["kishore", "pradeep", "barath", "rahul"];

class1.push(...class2);// with out the spread operator it will create a nested clsaa with the help of the spread operator only we can do it

console.log(...class1);


//================== REST PARAMETERS ===========================
console.log("============= REST PARAMETERS ================");
let o = 1;
let p = 2;
let q = 3;
let r = 4;
let s = 5;

// let a = [1, 2, 3, 4, 5, 6, 7];

// console.log(sum(...a));

console.log(sum(o, p, q, r, s));

  function sum(...numbers){
    let total = 0;
    for(let number of numbers){
      
      total = total + number;
       
    }
    return total
  }


  //================== CALLBACK FUNCTION ================
  console.log("============= CALLBACK FUNCTION ================");
// callBack = a function passed as an argument to another function

//   sum(2, 3, displayConsole);// in this line what we are doing is we need to run the sun function first and after that we pass the result to display function to run we passing the display console funcutuion as an argument to the sum function

// function sum(x, y, displayCon){// in hear we receive the argument and getting the result and passing it to display function
//     let result = x + y;
//     displayCon(result);
// }

// function displayConsole(output){//in hear we are getting the result as output and display it in console prompt
//     console.log(output);
// }




//============ Fey anothe array methods ===========

let food = [
    { name: "plain Biriyani", price: 100},
    { name: "chicken Biriyani", price: 150},
    { name: "Mutton Biriyani", price: 300},
    { name: "Fish Biriyani", price: 200},
    { name: "Pron Biriyani", price: 250},
    { name: "Crow Biriyani", price: 50},
    { name: "Beaf iriyani", price: 190},
    { name: "Chicken Soup", price: 70},
    { name: "Mutton Soup", price: 90},
    { name: "Dog Soup", price: 20},
    { name: "Cat Soup", price: 10},

];
// Filter Method // filter method filter the items what we want in this case we filtering the price less than < 100
console.log("Filter Method ======");
let filteredElement = food.filter(item =>{
    return item.price < 100;
})

console.log(filteredElement);




// map method
console.log("map method ======");
let mapElements = food.map(item => {
    return item.price;
});

console.log(`this is a map method ${mapElements}`);




// find method // find method find the element what we want in this case in this case we find the cate soup
console.log("find method ======");
let findElement = food.find(item => {
    return item.name === "Cat Soup";

});
console.log(findElement);




// forEach 
console.log("forEach method ======");
let forEachElement =  food.forEach(item => {
    console.log(item.price * 2);
});




// some // some function will give the boolean value if the argument given by us is satisfied it will give the true or false
console.log("some method ======");

let someElement = food.some(item => {
    return item.price < 50;
});
console.log(someElement);





// every // every function will give the boolean value it is not like some function some function only check item.price is less than 50 but in every function it check all the elements inside the array and has to satisfied the condition then only it gives the true if the cindition is not satisfied by any one of the element it give the  false
console.log("every method ======");

let hasExpensiveItems = food.every(item => {
    return item.price >= 10 && item.price <= 300;
});
console.log(hasExpensiveItems);




// reduce // what we are doing hear is reducing the value by adding every thing we can do this in another way using foor loop by crating dummy varliabel and assaining 0 for that and adding the items with the dummy variable
console.log("reduce ======");/* 1 */
let sumTotal = food.reduce((currentTotal, item) => {// we are giving currentTotal as an argument to the functon and assaining 0  to the function 
    return item.price + currentTotal;
} , 0); // this  , 0 is not mandetory in the forloop we need to assain a value 0 to add the items but in hear no need to do that this the 0 we assained to the currentTotal by adding like thid ( ,0) the 0 is go to the first place
console.log(sumTotal);




// includes
console.log("includes ======");// with the includes we can check the value is pressent inside the array or not it gives only the boolean value as a result
let itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(itemList.includes(10));









//================== #39 (02:41:58) array.forEach() ๐ ================
console.log("============= #39 (02:41:58) array.forEach() ๐================");

 

// we are going to capitalize the first letter of the all the words in an array
let students = ['akash', 'surya', 'dcrux'];
students.forEach(capitalize);// callEach function execute a provided callback function once for each element
students.forEach(print);
//in hear we creating a forEach function and puting the capitalize in it
function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1) ;
}

function print(element){
    console.log(element);
}


// another example finding the alphabets how many times return in the array 
let alphabets = ["a", "a", "b", "a", "b", "a", "c", "b", "a"];
let count2 = [];

alphabets.forEach(item => {
    if(count2[item]){//in hear we using a if else statement to find if the element how many times repeat again
        count2[item]++; // if the item alrady in the array it will add 1 
    }
    else{
        count2[item] = 1;
    }
});
console.log(count2);








//================== #40 (02:45:19) array.map() โ๏ธ ================
console.log("============= #40 (02:45:19) array.map() โ๏ธ================");


// a .map function executes a provided callback function once for each array element and create a new array
let aNumbers = [1, 2, 3, 4, 5 ];//we create a set of aNumbers in a array 

let squares = aNumbers.map(square);// in hear we use a map function to  send  an element to a function and get a result
let cubes = aNumbers.map(cube);

cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}



// another example for map method

let products = [
    {
        name: "dell",
        price: 10000,
        count: 3
    }, {
        name: "aspire",
        price: 20000,
        count: 4
    }, {
        name: "microSoft",
        price: 40000,
        count: 1
    }
];

let totalProductValue = products.map(item => {
    return item.price * item.count
})
console.log(totalProductValue);


//================== #slice() โ๏ธ ==============================
// slice()
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];

//let firstName = numbers5.slice(-3); // this will select the last 3 elements
let firstName2 = numbers5.slice(0, 3);

console.log(firstName2);


//another example

let participants = ["akash", "surya", "dcrux", "rahul", "kishore", "apata", "mohseen", "indu"];

let winners = participants.slice(0, 3);
console.log(winners);





//================== #41 (02:48:10) array.filter() ๐๏ธ ================
console.log("============= #41 (02:48:10) array.filter() ๐๏ธ================");


//array.filter() = craete a new array with all the elements that pass the test provided by a function
let ages = [18, 21, 17, 15, 25, 30, 16, 34];
let aAdult = ages.filter(checkAge);
aAdult.forEach(print);

function checkAge(element){
    return element >= 18;
}

function print(element){
    console.log(element);
}




// another example for filter method
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let even = numbers4.filter(item => {
    return item % 2 === 0; // to find even numbers4 and to find odd numbers remove === 0
});
console.log(even);





// another example
let people = [
    {
        name: "akash",
        age: 24
    }, {
        name: "rahul",
        age: 27
    }, {
        name: "dcrux",
        age: 18
    }, {
        name: "surya",
        age: 15
    }, {
        name:"aakaash",
        age: 14  
    }
];

let adult2 = people.filter(item =>  item.age >= 18
);
console.log(...adult2);







// another example //in this program we will remove the duplicates and arrange the remenine

let numbers1 = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7,8];

let sortIt = numbers1.filter((item, index, array) => {
    return array.indexOf(item) === index;
         /*         1       */    /* 2  */
   // in the above line  the '1' program is to find the index of the item once we run the peogram the place of the item is filled with the array values like 1 , 2, 3 etc but the starting point the item is filled with the first value 1 and after that we find the index of the item because we include the indexOf(1) infront of the bracket and we are going to find the index of the item 1 and the index of the item 1 is 0 , and and the index of 2 is 0 , and index of 3 is 0 too but after that the 4th value comes the indexOf 1 is 1 because the first one alredy comes and in the "2nd" statment the indexOf(item) === index if the item comes the first time the index is 0 and if the same number comes second time its index is 1                    
});
console.log(sortIt);






//================== #42 (02:50:21) array.reduce() ๐ ================
console.log("============= #42 (02:50:21) array.reduce() ๐================");

//array.reduce() = reduce an array to a single element
let prices = [5, 10, 15, 20, 25, 30, 50];
let aTotal = prices.reduce(checkOut);

function checkOut(aTotal, element){
   return aTotal + element;
}
console.log(aTotal);





// another example for reduce
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let total1 = numbers2.reduce((accumulator, item) => {
    return accumulator + item;
});
console.log(total1);








// another example
let food1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumTotal1 = food1.reduce((currentTotal, item) => {
    return currentTotal + item;
} ,1); 
console.log(sumTotal1);






// another example 
let numbers3 = [10, 2, 3, 4, 5, 6, 7];
                           /*   4    */
let max = numbers3.reduce((accumulator, item) => {
       /*  1   */   
    if(accumulator > item){// to begine with the accumulator is 0  in this if else statement we are checking out accumulator is grater than item  but in the (2nd) the accumulator is never be grater then item because if we didint declare the value the accumulator will be 0 so if we compared with the item  the item will be grater than the the accumulator  so it fails then it go to the (else) (3) statement and return the value  to the (4) accumulator and again use it in the (1) statement  and the process will be don again and again till the number of elements finished ex first it checks 10 and 2 and 3 .... upto 7 if there is any number after it 
     /* 2 */   return accumulator;
    }
    else{
    /* 3 */    return value;
    }
}/* 1 */);// in this example we cant give avalue in the "1"
console.log(max);






// another example

let store = [
    {
        product: "laptop",
        value: 10000,
        count: 3
    }, {
        product: "tab",
        value: 1000,
        count: 2
    }, {
        product: "phone",
        value: 20000,
        count: 1
    } 
];

let totalValuStore = store.reduce((accumulator, item) => accumulator + (item.value * item.count), 0);
 console.log(totalValuStore);

//we can use the regular way also
 /* let totalValuStore = store.reduce((accumulator, item) => {
    return accumulator + item.value * item.count
} , 0);
console.log(totalValuStore); */







//================== #43 (02:52:33) sort an array of numbers ๐  ================
console.log("============= #43 (02:52:33) sort an array of numbers ๐ ================");

let grades = ['30', '40', '50', '60', '70', '80', '90', '100'];

// let valu = grades.sort(ascendingSort);
let valu = grades.sort(desendingSort);// in heare we are sort in ascending and desenting order
valu.forEach(print);

function ascendingSort(x, y){
    return x - y;
}
function desendingSort(x, y){
    return y - x;
}
function print(element){
    console.log(element);
}


//================== #44 (02:54:41) function expressions ๐คซ  ================
console.log("============= #44 (02:54:41) function expressions ๐คซ ================");

// function expression = function withOut a name (anonymous function) avoid polluting the global scope with names write it, then forget about it

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
let countNum = 0;
document.getElementById("increaseCount").onclick = function(){
    countNum+=1;
    document.getElementById("myLabel").innerHTML = countNum;
    
}
document.getElementById("decreaseCount").onclick = function(){
    countNum-=1;
    document.getElementById("myLabel").innerHTML = countNum;
    
}


//================== #45 (02:59:55) arrow function expressions ๐น ================
console.log("============= #45 (02:59:55) arrow function expressions ๐น================");


//Step: 1
let greating = function(userName, age){
    console.log(`hello ${userName} ${24}`);
}

greating("akash d crux", "24");

//Step: 2
let greatinga = (userName, age) => {console.log(`hello ${userName} you are ${age} years old`)};

greating("akash d crux", '24');

//Step: 3
let greatingb = function(x, y){
   return x / y * 100;
}
console.log(`${greatingb(75, 100)}%`);

//Step: 4
let greatingc = (x, y) => {x / y * 100};

 console.log(`${greatingb(85, 100)}%`);

 //Step: 5
 // this is a normal function
 console.log("this is a normal function");
 let gradesa = [100, 50, 40, 30, 80];

 gradesa.sort(assendingOrder);
 gradesa.forEach(print);
                         /* 1 */
 function assendingOrder(x, y){
    return x - y;
           /* 2 */
 }
 function print(element){
    console.log(element);
 }

// step: 6
let gradesb = [100, 50, 40, 30, 80];

console.log("assending order");// combining the 1 and 2 in single line with aerro function 
              /* 1 */  /* 2 */     
gradesb.sort((x, y) => x - y);
gradesb.forEach((element) => console.log(element));


console.log("desending order");

gradesb.sort((x, y) => y - x);
gradesb.forEach((element) => console.log(element));


// Step: 7 
//another example for aerro function with reduce function

let pricesa = [5, 10, 20, 30];
// let totala = pricesa.reduce(checkOut);


// function checkOut(totala, element){
//     return totala + element;
// }

// console.log(totala);
let totala = pricesa.reduce((totala, element) => totala + element);
console.log(`This is the totala ${totala}`);





