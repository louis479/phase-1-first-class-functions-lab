// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Function that returns the first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function that returns the last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing the two driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that creates a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// Function that triples the fare
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on the provided function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
