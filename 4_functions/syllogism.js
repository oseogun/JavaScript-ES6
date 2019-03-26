/*
* Sample code to demostrate Javascript functions syntax using the Syllogism
*/

/*
* --Scenario One--
* All men are mortal.
* Socrates is a man.
* Therefore, socrates is mortal.
*/

// Define function
function mortalIdentifier(person){

  // Initialize an array of individuals
  const men = ["Socrates","Plato","Aristotle"];
  console.log('\n'+"--Question One---");

  // Check if 'Socrates' is in men array
  if (men.indexOf(person) > -1){

    console.log("All men are mortal.");
    console.log(person + " is a man.");
    console.log("Therefore, " + person + " is mortal");
    console.log('\n');

  } else {

    console.log(person + " is not a man");
    console.log("Therefore, " + person + " is not mortal");
    console.log('\n');

  }

}

// Run function
mortalIdentifier("Socrates");
mortalIdentifier(5);


/*
* --Scenario Two--
* This cake is either vanilla or chocolate.
* This cake is not chocolate.
* Therefore, this cake is vanilla.
*/

// Define function - isChoclate
function cakeIdentifier(cakes, isChocolate){

  console.log('\n'+"---Question Two---");

  // Check for the cakes flavor
  if(isChocolate && (cakes.indexOf("Chocolate") > -1)){

    console.log('\n');
    console.log("This cake is chocolate");
    console.log('\n');

  } else if(!isChocolate && (cakes.indexOf("Vanilla") > -1)) {

    console.log("A cake is either vanilla or chocolate");
    console.log("This cake is not chocolate");
    console.log("Therefore, this cake is vanilla");
    console.log('\n');

  } else {

    console.log('\n'+"---Question Two---");
    console.log("This is not a cake");
    console.log('\n');

  }

}

// Run function
// Initialize an array of cakes
const cakes = ["Vanilla","Chocolate","Banana"];
cakeIdentifier(cakes,true);
cakeIdentifier(cakes,false);
