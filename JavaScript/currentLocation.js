// lets suppose we want to get the current location of user ;

// There is a package called navigator , which is inbuilt and used for getting current location

async function getLocation() {
  await navigator.geolocation.getCurrentPosition(
    (data) => {
      console.log("The current location of user : ", data);
    },
    (error) => {
      console.log("Some error occured :", error);
    }
  );
}

getLocation();
