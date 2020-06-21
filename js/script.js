setTimeout(function () {

//ask for the kind of vacation
var vacationType = prompt("What kind of trip would you like to go on? (musical, tropical, or adventurous)");
//if the answer provided is invalid, ask again until a valid option is provided
while (!(vacationType === "musical" || vacationType === "tropical" || vacationType === "adventurous")) {
    vacationType = prompt("Please enter a valid vacation type. (musical, tropical, or adventurous)");
}

//ask for how many are in travel group
var groupSize = prompt("How many are in your group?");
groupSize = Number(groupSize, 99);

//if the group size entered is not a number, ask again until a number is entered
while (isNaN(groupSize)) {
    groupSize = prompt("Please enter a positive whole number group size.");
    groupSize = Number(groupSize, 99);
}

while (groupSize <= 0) {
    // if less than 0; negative;
    groupSize= prompt("Quantity field must contain a positive whole number!");
    groupSize = Number(groupSize, 99);
}

while (!Number.isInteger(groupSize)) {
    // if not a whole number
    groupSize= prompt("Quantity field must contain a positive whole number!");
    groupSize = Number(groupSize, 99);
}

//determine the destination based on the vacation type
var destination = "";
switch (vacationType)   {
    case "musical":
        destination = "New Orleans";
        break;
    case "tropical":
        destination = "Beach Vacation in Mexico";
        break;
    case "adventurous":
        destination = "Whitewater Rafting the Grand Canyon";
        break;
    default:
        destination = "unknown";
}

//determine the travel suggestion based on group size
var travelSuggestion = "";

if (groupSize < 3) { //less than 3 people
    travelSuggestion = "First Class";
}else if (groupSize <= 5) { //between 3 and 5 people
    travelSuggestion = "Helicopter";
}else { //6 or more people
    travelSuggestion = "Charter Flight";
}

//result string and output
var result = ("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to " + destination + ".");
alert(result);
console.log(result);
}, 400)
