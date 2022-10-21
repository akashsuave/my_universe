

 /* javsscript practising */



//  let letters = ['a', 'b', 'h', 'b', 'a', 'f', 'g', 'h', 'a', 'b', 'f'];

//  let count = [];

//  letters.forEach(item => {
//     if(count[item]) {
//         count[item]++;
//     }
//     else{
//         count[item] = 1;
//     }
//  });
//  console.log(count);

// let students = ['akash', 'mama', 'dcrux'];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element){
//     console.log(element);
// }


let places = ["chennai", "goa", "coiambuthure", "erode", "salem", "sirkali"];

places.forEach(capat);
places.forEach(print);



function capat(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

