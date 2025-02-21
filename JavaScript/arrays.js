
const person = ['Dev' , 'John' , 'Jane'];
console.log(person);
console.log(person.length);  // we can get the size of array 

//we can access any element by their index value 
console.log(person[1]);

person[1] = 'Johnny';
console.log(person);

person.push('Tony');
console.log(person);

const marks = [1,2,3,4,5,6];

const myArray = ['Hello' , true , 23, 'july'];       // multiple datatypes are allowed in js 
console.log(myArray);
console.log(typeof myArray);

myArray.push({           // even objects 
    name:'Dev',
    age:19
});
console.log(myArray);

let ind = myArray.indexOf('july');
if(ind === -1){
    console.log('Element not found . Hence no index available')
}else{
    console.log('Element is at index ' , ind);
}

myArray.reverse();
console.log(myArray);




// Arrays higher order function ; 

//Those functions which takes another functions as parameter are called higher order functions; 



person.forEach((e)=>{
    console.log(e);
});
console.log(person);


const numbers = [2,5,1,5,6,7,8,3];

// .map() works same as forEach , just the difference is that , 
// .map() returns a new array 

// suppose we have a task , that we need to double the numbers ind.e multiply by 2; 

const newNumbers = numbers.map((e)=>{        // map will return a new array of elements 
    return e*2;
});
console.log(newNumbers);


const onlyEven = numbers.filter((e)=>{         // filter will return a new array of elements with only those who satisfy the condtitions
    return e%2===0;
});
console.log(onlyEven);

const someElements = numbers.slice(2,5);
console.log(someElements);

// splice(2,5)  will remove the elements from the original array from start to end index and return the removed elements in a new array 

