




setTimeout(() => {
  console.log("Hye , I'm printing hello after 2 seconds Hello");
}, 2000);

let interval = setInterval(() => {
  console.log("Hey , But i'm printing hello in every 2 seconds .");
}, 2000);

setTimeout(() => {       // I can put this onClick event listener 
    clearInterval(interval);             // Execute this statement to stop the interval;
    console.log("Hey , I'm stoping the interval after 15 seconds ")
}, 15000);