


// we use fetch() to call a api .


async function getData(){
    let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(resultFromServer);
    console.log(await resultFromServer.json());

}

getData();