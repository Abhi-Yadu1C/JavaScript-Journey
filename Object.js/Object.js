const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffine:"low"
}

// Problem: Access and print the name and type properties of the tea object.
 console.log(teas.name);
 console.log(typeof[teas]);

 // Problem: Add a new property origin to the object
 teas.origin = "Assam"

 // Problem: Change the caffeine level of the tea object to "Medium"
 teas.caffine = "Medium"

 // Problem: Remove The type propert from the tea object.
 delete teas.type

 //Problem: Check if the tea object has a property origin
 console.log("origin" in teas);

 //Problem: Use a for   in loop to print all properties of the tea object
 for(let key in teas){
    console.log(key + " : " + teas [key])
 }

 //Problem: Create a nested object representing different types of teas and their properties.

 const myTeas ={
    greentea:{
        name: "Green Tea"
    },
    balckTea:{
        name: "Black tea"
    }
 }

 
