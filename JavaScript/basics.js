



// var vs let vs const ; 

if(true){
    var key = 20;  // <-- This var have a global scope .i.e outside of a block too 
}
console.log(key);





let name ;
console.log(name);       // this is undefined 

let myname = 'dev';
console.log(myname);

console.log(typeof(myname));

let a = '2'+2;           // this will be a stiring
console.log(a);
console.log(typeof(a));


a = '22'*3;          // this will be a number 
console.log(++a);
console.log(typeof(a));

a = '2'+'2';            //this is also a string 
console.log(a);
console.log(typeof(a));

let isTrue = true
console.log(isTrue);



a = null;        // null indicates that value is not available 
console.log(a);
console.log(typeof(a)); //but the type of null is a object 

let b;              // but here b is undefined which tells us this variable is not initialized 
console.log(b);
console.log(typeof(b)); // here the type is also undefined 


// null vs undefined ; 

// Undefined : the variable is decleared but its not initialized yet .i.e missing value; 
// and its type is also undefined ; 

// null : null indicated no value, and its type is object ; 
// we use null to clear out a variable/data; 




// TYPE CASTING; 

// we  can convert variables to different datatypes ; 

let num = 62 ; 
let numString = num.toString();      // number to string 

console.log(num);        // This is a number 
console.log(numString);     // this is a string 

let numb = Number(numString);       // conversion of string to number 
console.log(numb);          


let text = 'Hello World!!';
console.log(text.slice(2,7));
console.log(text.toUpperCase());

console.log(text.at(0));
console.log(text.charAt(0));



const age = 20 ;
// age = 40;               // we can;t reassign a const variable;
console.log(age);        


// Object
const person = {
    firstName : 'Dev',
    lastName :'kumar',
    age:20,
    branch:'cse'
}

console.log(person);


// 1 -- > true ;
// 0 --> false;


let myAge = '40';
// i want to convert it to number type i.e number 40 
console.log(myAge*1);       // output will be number 40;
console.log('a'*1);      //  -- >  output is NaN , means not a number 

// String '1' + '1' => String '11'
// String + number => String
// String  * number => number


// CONDITIONAL STATEMENTS; 

if (myAge>=18) {
    console.log('Yes , You can vote');
    
} else {
    console.log('No , you cant vote');
    
}




// Terniary Operator

myAge>=18 ? console.log('Yes , You can vote') : console.log('No , you cant vote');

let result = myAge>=18 ? 'Yes' : 'No';

console.log(result);


const gender = 'male';

if(myAge>=18 && gender=='male'){
    console.log('you are a adult male');
}



console.log(2 == '2' );      // This will give true , as it only checks value 
console.log(2 === '2');      // this will give false , as it will check value along with datatype






