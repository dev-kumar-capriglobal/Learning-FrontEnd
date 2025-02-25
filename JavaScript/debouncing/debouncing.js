let count = 0;

function getData() {
  // lets say this is a api call being made for every search query to the backend;
  count++;
  console.log('Fetching data using api call  : ',count , ' times ');
}

function magicFunction(fn, T) {

    let timer;

  return function () {

    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context , args);
    }, T);
  };
}
 
const betterFunction = magicFunction(getData, 500); // This function will be called on searchbar , if any keystroke is not pressed for 500ms;

document.getElementById('input-text').addEventListener('keyup' , ()=>{
  betterFunction();
} );

document.getElementById('search-button').addEventListener('click' , (e)=>{
  let text = document.getElementById('input-text').value;
  console.log('calling the api for '  , text);

})