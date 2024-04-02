//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startFuelLevel = 0;
let astronautsAboard = 0;
let altitudeShuttle = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (isNaN(startFuelLevel) || startFuelLevel < 5000 || startFuelLevel > 30000) {
  startFuelLevel = input.question("What is the starting fuel level?");
}
console.log(startFuelLevel);


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (astronautsAboard > 7 || isNaN(astronautsAboard) || astronautsAboard < 1) {
    astronautsAboard = input.question("How many astronauts are aboard?");
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startFuelLevel-100*astronautsAboard >= 0) {
  altitudeShuttle += 50;
  startFuelLevel -= 100*astronautsAboard;
}
console.log(`The shuttle gained an altitude of ${altitudeShuttle}km.`);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitudeShuttle >= 2000){
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}