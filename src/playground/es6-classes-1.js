class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `I am ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = "Undeclared") {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor) {
            description += ` I am studying ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){

        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

/*
const me = new Student("Keekee", 5, "Journalism")
const other = new Person();

console.log(me)

console.log(me.getGreeting());

console.log("!!" + me.getDescription());

console.log(me.hasMajor());
*/

const me = new Traveler("Dude", 10, "Miami")

console.log(me.getGreeting())
