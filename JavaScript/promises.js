//  promise is returned by those tasks , which takes time to complete ; 

// Since the task will take time to complete , it returns a promise instead of an actual data; 

// either the task will complete or it will fail. 

// We're using Fetch() as a task which takes time to complete

fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    // if the promise is completed / resolved
    console.log(data);
}).catch((error)=>{
    // if the promise is failed 
    console.log(error);
}).finally(()=>{
    console.log("This block will run , whether promise completes or not ");
})




// async function getData(){
//     let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(resultFromServer);
//     console.log(await resultFromServer.json());

// }

// getData();