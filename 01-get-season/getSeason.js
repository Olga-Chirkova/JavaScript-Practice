
/*
Create a function called getSeason that accepts two parameters: month and temperature.
Both parameters must be integers.

Check if the month is NOT within the range of 1 to 12.
If it is not, return an error message.

Then perform the following checks:

- If the month is 12, 1, or 2 and temperature <= 5, return winter.
- If the month is between 3 and 5 and temperature < 20, return spring.
- If the month is between 6 and 8 and temperature > 20, return summer.
- If the month is between 9 and 11 and temperature is between 5 and 20, return autumn.
- Otherwise, return a message indicating that the season conditions do not match.
*/

function getSeason (month, temperature) {
    if (Number.isInteger(month) && typeof(temperature) === "number"){
        if (month < 1 || month > 12) {
            return "Check the month, it should be between 1 and 12";
        }
        else if ((month === 1 || month === 2 || month === 12) && temperature <=5) {
            return "It's winter now";
        }
        else if ((month >= 3 && month <= 5) && temperature <20) {
            return "It's spring now";
        }
        else if ((month >= 6 && month <= 8) && temperature >20) {
            return "It's summer now";
        }
        else if ((month >= 9 && month <= 11) && (temperature > 5 && temperature <= 20)) {
            return "It's autumn now";
        }
        else {
            return "Unknown season";
        }
    }
    else {
        return "You should enter a number"
    }
}

console.log (getSeason(6, 25))

