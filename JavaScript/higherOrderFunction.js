
function add(a,b,cb){        // This is a higher order function , which accepts a function as a arguement 

    let res = a+b; 
    cb(res);
}


add(2 , 4 , (val)=>console.log(val) );       // The function which is printing the res is callback function, as we are passing it the 
                                            // in the function call; 
