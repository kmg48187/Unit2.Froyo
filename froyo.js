
const userInputString = prompt(
    "Please enter some froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
 const froyoString = userInputString.split(",");
// froyoString is all the flavors split into individual strings

console.log(froyoString)



function countFlavors(froyoString){
    for (let i = 0; i < froyoString.length; i++) {
    const froyoObj = {};
    //If there is no key with that name, it will be created and the value will be set to 1
        
        if(froyoObj[froyoString[i]] === undefined)
            {froyoObj[froyoString[i]] = 1;
        }
    //If that key is already created, it will add 1 to the value
         else{froyoObj[froyoString[i]] += 1;}
    

    }
    console.log(froyoObj);
    console.table(countFlavors(froyoString));
}


 
    


 