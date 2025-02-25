


const sum = (a , b )=>{
    let res = a+b;       // outer function 

    return ()=>{         // Inner function 
        console.log('sum is : ',res);
        res++;
        console.log('Incremented value as we can access it from inner function ',res);
    }

}

const fxn = sum(2 , 8);
fxn();

// Closure is related to the function body ; 
// higer order function is related to the parameter of function

function main(){
    let name = 'Dev';        // outer function variable

    function sayMyName(){
        console.log(name);           // inner function can access the environment/values of outer function  --> closure 
    }

    sayMyName();         // we have not passed name as a parameter but still the inner function can access the outer function variables . 

}
main()