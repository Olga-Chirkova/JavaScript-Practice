/*# Flight Management System

## Objective
Create a flight management system using JavaScript arrays, objects, functions, loops, and input validation.

## 1. Data Structure

Create a global array named `flights` to store flight records.

Each flight must be represented by an object containing:

- `flightNumber` — flight number.
- `destination` — destination city.
- `departureTime` — departure date and time stored as a `Date` object.
- `capacity` — maximum number of passengers.
- `passengers` — an array of registered passenger names.
- `isCancelled` — a boolean indicating whether the flight is cancelled.

## 2. Function Implementation

### `addFlight(flightNumber, destination, departureTime, capacity)`
- Add a new flight to the system.
- Validate all input parameters.
- Reject duplicate flight numbers.
- Initialize an empty passenger array and set `isCancelled` to `false`.
- Display a success or error message.

### `cancelFlight(flightNumber)`
- Find a flight by its number.
- Change its `isCancelled` status to `true`.
- Handle cases where the flight does not exist or is already cancelled.

### `registerPassenger(flightNumber, passengerName)`
- Register a passenger for a specific flight.
- Verify that the flight exists and is not cancelled.
- Ensure that the flight has available seats.
- Validate the passenger name.
- Prevent duplicate passenger registration on the same flight.

### `findFlightByNumber(flightNumber)`
- Find a flight and display its information:
  - Destination.
  - Departure time.
  - Cancellation status.
  - Available seats.
  - Occupied seats.

### `showAllFlights()`
- Display all flights stored in the database.
- Display a warning if the database is empty.

### `showFlightPassengers(flightNumber)`
- Display a numbered list of passengers registered for a specific flight.
- Handle cases where the flight does not exist or has no registered passengers.

## 3. Input Validation and Error Handling

- Validate flight numbers and capacity values.
- Validate destination and passenger names.
- Validate departure dates.
- Reject invalid data types and empty values.
- Prevent duplicate flight numbers.
- Prevent passenger registration on cancelled or fully booked flights.
- Handle missing flight records.

## 4. Testing

- Create several sample flights.
- Register passengers for different flights.
- Display information about a specific flight and all available flights.
- Display passenger lists.
- Cancel a flight and verify that new passenger registrations are blocked.
- Test invalid input values and edge cases. 
*/


// Flight database
const flights = [
    {
        flightNumber: 1420,
        destination: "Los Angeles",
        departureTime: new Date("2026-09-01T08:30:00"),
        capacity: 180,
        passengers: ["Ann White", "John Smith"],
        isCancelled: false
    },
    {
        flightNumber: 2050,
        destination: "New York",
        departureTime: new Date("2026-09-01T11:00:00"),
        capacity: 200,
        passengers: ["Emily Davis", "Michael Brown", "Sophia Wilson"],
        isCancelled: false
    },
    {
        flightNumber: 3180,
        destination: "Miami",
        departureTime: new Date("2026-09-01T15:45:00"),
        capacity: 150,
        passengers: ["Daniel Martinez", "Olivia Taylor"],
        isCancelled: false
    },
    {
        flightNumber: 4095,
        destination: "Chicago",
        departureTime: new Date("2026-09-01T19:15:00"),
        capacity: 160,
        passengers: ["James Anderson", "Emma Thomas", "Alexander White"],
        isCancelled: false
    }
];

// Helper function to find a flight by its number
function getFlightByNumber(flightNumber) {
    return flights.find(flight => flight.flightNumber === flightNumber);
}

// Add a new flight
function addFlight(flightNumber, destination, departureTime, capacity) {

    // Validate flight number
    if (!Number.isSafeInteger(flightNumber) || flightNumber <= 0) {
        console.error("Invalid flight number");
        return;
    }

    // Validate destination
    if (typeof destination !== "string" || destination.trim() === "") {
        console.error("Invalid destination");
        return;
    }

    // Validate capacity
    if (!Number.isSafeInteger(capacity) || capacity <= 0) {
        console.error("Capacity must be a positive integer");
        return;
    }

    // Validate and convert departure date
    const date = departureTime instanceof Date
        ? new Date(departureTime.getTime())
        : typeof departureTime === "string"
            ? new Date(departureTime)
            : null;

    if (date === null || Number.isNaN(date.getTime())) {
        console.error("Invalid departure date");
        return;
    }

    // Prevent duplicate flight numbers
    if (getFlightByNumber(flightNumber)) {
        console.error(`Flight ${flightNumber} already exists`);
        return;
    }

    // Create and add a new flight
    const newFlight = {
        flightNumber,
        destination: destination.trim(),
        departureTime: date,
        capacity,
        passengers: [],
        isCancelled: false
    };

    flights.push(newFlight);
    console.log(`Flight ${flightNumber} was successfully added`);
}

// Cancel a flight
function cancelFlight(flightNumber) {

    const flight = getFlightByNumber(flightNumber);

    if (!flight) {
        console.error(`Flight ${flightNumber} was not found`);
        return;
    }

    if (flight.isCancelled) {
        console.log(`Flight ${flightNumber} is already cancelled`);
        return;
    }

    flight.isCancelled = true;
    console.log(`Flight ${flightNumber} was cancelled`);
}

// Register a passenger
function registerPassenger(flightNumber, passengerName) {

    const flight = getFlightByNumber(flightNumber);

    if (!flight) {
        console.error(`Flight ${flightNumber} was not found`);
        return;
    }

    // Validate passenger name
    if (typeof passengerName !== "string" || passengerName.trim() === "") {
        console.error("Invalid passenger name");
        return;
    }

    // Prevent registration for cancelled flights
    if (flight.isCancelled) {
        console.error(`Flight ${flightNumber} is cancelled. Registration is not allowed`);
        return;
    }

    // Check flight capacity
    if (flight.passengers.length >= flight.capacity) {
        console.error(`Flight ${flightNumber} is fully booked`);
        return;
    }

    // Prevent duplicate passenger registration
    const name = passengerName.trim();

    if (flight.passengers.includes(name)) {
        console.error(`${name} is already registered for flight ${flightNumber}`);
        return;
    }

    flight.passengers.push(name);
    console.log(`${name} was registered for flight ${flightNumber}`);
}

// Find a flight and display its information
function findFlightByNumber(flightNumber) {

    const flight = getFlightByNumber(flightNumber);

    if (!flight) {
        console.error(`Flight ${flightNumber} was not found`);
        return;
    }

    const occupiedSeats = flight.passengers.length;
    const availableSeats = flight.capacity - occupiedSeats;
    const status = flight.isCancelled ? "Cancelled" : "Active";

    console.log(`Flight number: ${flight.flightNumber}`);
    console.log(`Destination: ${flight.destination}`);
    console.log(`Departure time: ${flight.departureTime}`);
    console.log(`Status: ${status}`);
    console.log(`Seats available: ${availableSeats}`);
    console.log(`Seats occupied: ${occupiedSeats}`);
}

// Display all flights
function showAllFlights() {

    if (flights.length === 0) {
        console.log("There are no flights in the database");
        return;
    }

    for (const flight of flights) {
        const status = flight.isCancelled ? "Cancelled" : "Active";

        console.log(
            `Flight ${flight.flightNumber}: ${flight.destination}, ` +
            `Departure: ${flight.departureTime}, Status: ${status}`
        );
    }
}

// Display passengers registered for a specific flight
function showFlightPassengers(flightNumber) {

    const flight = getFlightByNumber(flightNumber);

    if (!flight) {
        console.error(`Flight ${flightNumber} was not found`);
        return;
    }

    if (flight.passengers.length === 0) {
        console.log(`There are no passengers registered for flight ${flightNumber}`);
        return;
    }

    console.log(`Passengers for flight ${flightNumber}:`);

    for (const [index, name] of flight.passengers.entries()) {
        console.log(`${index + 1}. ${name}`);
    }
}

// Demonstration
console.log("=== Flight Management System ===");

addFlight(1055, "San Francisco", "2026-09-01T12:00:00", 120);

cancelFlight(1055);

registerPassenger(1420, "John Smith");
registerPassenger(1055, "Jane Doe");

findFlightByNumber(2050);

showAllFlights();

showFlightPassengers(4095);

// Additional validation tests
console.log("\n=== Input Validation Tests ===");

addFlight(1420, "Boston", "2026-09-02T10:00:00", 100);
addFlight(5000, "", "2026-09-02T10:00:00", 100);
addFlight(5001, "Seattle", "invalid-date", 100);
addFlight(5002, "Seattle", "2026-09-02T10:00:00", -10);

registerPassenger(9999, "Jane Doe");
registerPassenger(1420, "");
registerPassenger(1055, "Jane Doe");

console.log("\n=== Final Flight Database ===");
console.log(flights);
