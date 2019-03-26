/*
* Sample code to demostrate Javascript control flow & logic syntax using the Syllogism
*/

/*
* --Question One--
* All men are mortal.
* Socrates is a man.
* Therefore, socrates is mortal.
*/

// Initialize an array of individuals
const men = ["Socrates","Plato","Aristotle"];

// Initialize a person variable
let person = "Socrates";

// Check if 'Socrates' is in men array
if (men.indexOf(person) > -1){
  console.log('\n'+"--Question One---");
  console.log("All men are mortal.");
  console.log(person + " is a man.");
  console.log("Therefore, " + person + " is mortal");

} else {

  console.log(person + " is not a man");
  console.log("Therefore, " + person + " is not mortal");

}

/*
* --Question Two--
* This cake is either vanilla or chocolate.
* This cake is not chocolate.
* Therefore, this cake is vanilla.
*/

// Initialize an array of cakes
const cakes = ["Vanilla","Chocolate"];

// Initialize a cake variable
let cake = "Vanilla";

// Check if 'Socrates' is in men array
if (cakes.indexOf(cake) > -1){
  console.log('\n'+"---Question Two---");
  console.log("A cake is either vanilla or choclate");

  if (cake !== "Chocolate") {
    console.log("This cake is no chocolate");
    console.log("Therefore, this cake is vanilla");
  } else {
    console.log("This cake is choclate");
  }


} else {

  console.log("This is not a cake");

}
