//Question 1
const obj = {
    name: " designer priya",
    sayHello: function () {
       console.log(`hello ${this.name}`);
    }
}
//Question 2
const obj2 = {
    value: 10,
   add: () => {
        console.log(`${this.name + 5}`);
    },
    sub: () => {
        console.log(`${this.name - 5}`);
    }
}
//Question 3
const obj3 = {
    value: 10,
    add: function () {
        console.log(`${this.name + 5}`);
    },
    sub: () => {
        console.log(`${this.name - 5}`);
    }
}

//Question 4

const car = {
    startEngine: function () {
        console.log(`starting the engine of ${this.brand}`);
    }
}
car.startEngine.call({ brand: "audi" });

//Question 5
const mathOperations = {
    sum: function (a, b) {
        console.log(a + b);
   }
}

mathOperations.sum.apply({}, [5, 10]);

//Question 6
const counter = {
    count: 0,
   increment: function () {
       this.count++;
       console.log(`${this.count}`);
    }
}
const inc = counter.increment.bind(counter);
inc();

//Question 7
const timer = {
    name: "priya designer",
   start: function () {
        setTimeout(() => {
           console.log(`${this.name}started!`)
       }, 2000)
    }
}
const print = timer.start.bind(timer);
print();

//Question 8
const rectangle = {
    length: 5,
    breadth: 10
}
const circel = {
    radius: 5,
    pi: 3.14
}
function areaOfRectangle(l, b) {
    console.log(l * b);
}
function areaOfCircle(pi, r) {
    console.log(pi * (r ** 2));
}
areaOfRectangle.call(areaOfRectangle, rectangle.length, rectangle.breadth);
areaOfCircle.call(areaOfCircle, circel.pi, circel.radius);

//Question 9
class Employee {
   constructor(name, designation) {
        this.name = name;
        this.designation = designation;

    }
   introduce() {
        console.log(`hi i am ${this.name},${this.designation}`);
    }
}
const employee1 = new Employee("priya", "designer");
employee1.introduce();