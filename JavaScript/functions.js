


function sayHello()      // creating a function 
{

    console.log('hello');


}


sayHello();          // calling a function 
sayHello();
sayHello();
sayHello();

function add(a ,b){
    console.log(a+b);
}

add(2,2)


// unlimited argurments 
function addNumbers(){

    console.log(arguments);          // this contains a array/object of all the arguments passing in function call 
    
    let ans = 0;
    for (let i = 0; i < arguments.length; i++) {
        ans = ans + arguments[i];
    }

    console.log(ans);

}

addNumbers(10,20,3,40,5);



//unlimited arguments; 
//here we are using a spread operator; 


function addNumbersV2( ...numbers ){

    console.log(numbers);
    let ans=0;
    numbers.forEach(e => {
        ans+=e;
    });
    console.log(`sum is =   ${ans}` )


}

addNumbersV2(123,4,45,51,12,12,645,7,58,32,342);



// This is a arrow function 

const myFunction = ()=>{
    console.log(`I'm a arrow function `);

}

myFunction();





