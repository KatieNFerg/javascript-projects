// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeed = "17500";
let distanceMars = "225000000";
let distanceMoon = "384400";
let milesPerKilo = "0.621";

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKilo);

// Calculate a space mission below
let milesMars = distanceMars * milesPerKilo;
console.log(milesMars);
let hoursMars = milesMars / shuttleSpeed;
console.log(hoursMars);
let daysMars = hoursMars / 24;
console.log(daysMars);
console.log(spaceShuttleName, "will take", daysMars, "days to reach Mars.");
let milesMoon = distanceMoon * milesPerKilo;
let hoursMoon = milesMoon / shuttleSpeed;
let daysMoon = hoursMoon / 24;
console.log(spaceShuttleName, "will take", daysMoon, "days to reach the Moon.");




// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below