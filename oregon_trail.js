(function(){
'use strict';

// Code block copied from MDN documentation. Allows us to create a random integer.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Traveler object
function Traveler(name, food, isHealthy){
  this.name = name;
  this.food = food;
  this.isHealthy = isHealthy;
}

// New Traveler object
function makeTraveler(name){
  return new Traveler(name, getRandomIntInclusive(1,100), true);
}

//Wagon object
function Wagon(passengers, capacity) { //THIS IS THE WAGON OBJECT
  this.passengers = passengers;
  this.capacity = capacity;
}

//New Wagon object
function makeWagon(capacity) {
  return new Wagon([], capacity)
}

//Function to track success of hunt. Use RandomIntInclusive to generate a random number from 1-100 to determine our starting food supply. 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).
function hunt(huntingtraveler) {
  let huntResult = getRandomIntInclusive(1, 100);
  if (huntResult > 50) {
    huntingtraveler.food = huntingtraveler.food + 100
    console.log("Success! Add 100 food points to the supply");
  }
}

//Function to track the traveler's food supply. If the traveler has equal or greater than 20 food, then there is enough to take food from. Each time he/she eats, consumes 20 worth of food. If there is less than 20, then the traveler is not healthy.
function eat(eatingtraveler){
  if (eatingtraveler.food >= 20) {
    eatingtraveler.food = eatingtraveler.food - 20
  }else {
    eatingtraveler.isHealthy = false;
  }
}

//Function to add a passenger to the wagon, depending on if there is room. Check the # of passengers in the array and if it's less than the capacity allowed, add another passenger to the end of the passengers array.
function join(joinwagon, jointraveler){
  if (joinwagon.passengers.length < joinwagon.capacity){
      joinwagon.passengers.push(jointraveler)
  }
}

//Function to check status of health on the wagon. If any of the passengers are sick, return true.
function quarantine(sickwagon) {
  let isQuarantine = false;
  for (let i = 0; i < sickwagon.passengers.length; i++) {
    if (sickwagon.passengers[i].isHealthy === false) {
      isQuarantine = true;
    }
    return isQuarantine;
  }
}

//Function to add up all the food in the wagon. Start a counter from 0 and add the food amount as you iterate through the passengers. Return the count of food on the wagon.
function food(foodwagon) {
  let counter = 0;
  for (let i = 0; i < foodwagon.passengers.length; i++) {
    counter = counter + foodwagon.passengers[i].food;
  }
    return counter;
}

// Create a wagon called 'wagon'
let wagon = makeWagon(5);
console.log(wagon);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
console.log(traveler);
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');
console.log(traveler2);

hunt(traveler); // maybe get more food
console.log(traveler)
eat(traveler2);
console.log(traveler2)
eat(traveler2); // juan is hungry
console.log(traveler2)
join(wagon, traveler);
console.log(traveler2)

join(wagon, traveler2);
console.log(traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food

}());
