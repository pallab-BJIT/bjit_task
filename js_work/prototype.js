function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function (gender) {
  console.log(
    `My name is ${this.name} and my age is ${this.age} and my gender is ${gender}`
  );
};

const person1 = new Person("John Doe", 28);
const person2 = new Person("Alice Smith", 36);

person1.sayHello("male");
person2.sayHello("female");
