//creation of objects

function person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new person("John", 25);
console.log(`${john.name} is my name`);
console.log(`I am ${john.age} years old`);

console.log(" ");

const Mike = new person("Mike", 20, "male");
console.log(`My name is ${Mike.name}`);
console.log(`I am ${Mike.age} years old`);

//creation of objects 2

const John = {
    Jname: "John",
    Jage: 25
}

const mike = {
    Mname: "Mike",
    Mage: 20
}
console.log(" ");
console.log(`${John.Jname} is my name`);
console.log(`I am ${John.Jage} years old`);
console.log(" ");
console.log(`${mike.Mname} is my name`);
console.log(`I am ${mike.Mage} years old`);