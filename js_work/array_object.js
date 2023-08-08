const carArray = [
  {
    id: 1,
    color: "Red",
    company: "Toyota",
    numberOfSeat: 2,
    isConditionOkay: true,
  },
  {
    id: 2,
    color: "Blue",
    company: "Audi",
    numberOfSeat: 2,
    isConditionOkay: true,
  },
  {
    id: 3,
    color: "Green",
    company: "Honda",
    numberOfSeat: 4,
    isConditionOkay: false,
  },
];

console.log("The car array:", carArray);
console.log("The 2nd index value of the car array:", carArray[1]);
console.log("Accessing the color property of the car array", carArray[2].color);
