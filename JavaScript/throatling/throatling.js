

let count =0;

function getData(){
    count++;
    console.log('api is called ' , count);

}

function someFunction(fn , limit){

    let flag = true;
    
    return function (){
        let count =10;
        // console.log(count);
        let context = this , args = arguments
        if (flag){
            let timer = setInterval(()=>{
                if(count===1)
                    clearInterval(timer);
                console.log(count--)} , 1000);
            

            fn.apply(context , args) ;
            flag = false;


            setTimeout( ()=>flag=true , limit);
            
            
        }


    }


}


const betterFunction = someFunction(getData , 10000);        // limiting the api call  for 10 seconds 

document.getElementById('mybtn').addEventListener( 'click', ()=>{
    // console.log('helo')
    betterFunction();
})
// betterFunction();  on click pe 



