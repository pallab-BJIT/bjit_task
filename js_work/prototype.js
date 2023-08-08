function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John Doe", 28);
const person2 = new Person("Alice Smith", 36);

person1.sayHello = function () {
  console.log(`My name is ${this.name} and my age is ${this.age}`);
};

person1.sayHello();
person2.gender = "female";

console.log(person2.gender);
