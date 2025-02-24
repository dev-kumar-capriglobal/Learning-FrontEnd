

// Local Storage ; 

// data is store unencrypted , hence its not safe for storing sensitive information; 

// can be used as cached data for offline usage

// data is stored in key ,value pairs; 

// websites can store data to the user's browser

// Every domain have its own local storage , 

localStorage.setItem('Hey' , ' There ');
localStorage.setItem('namaste' , 'Javascript');
localStorage.setItem('Age' , 1 );
localStorage.setItem('isValidUser' , true);

// localStorage.clear()


console.log('name ',localStorage.getItem('namaste'));
console.log(localStorage.getItem('student'));



let obj = {name : 'Dev' , Age:13};
localStorage.setItem('student' , obj);   
// object/Functions/arrays can not be stored directly to the localstorage 
// First serialise them to json then store it 
// parse them back from json to use them; 


// JSON.stringify() converts the object to a string, and JSON.parse() converts it back into an object.

let jsonData = JSON.stringify(obj);

localStorage.setItem('data', jsonData);
console.log(jsonData);

let parseObj = JSON.parse(localStorage.getItem('data'));
console.log(parseObj);






// SESSION STORAGE - > This will be available for the duration of page session ;
// rest of the concepts are similiar to the local storage ;

// When the data should only be available in a specific tab, and not shared with other tabs or windows.

