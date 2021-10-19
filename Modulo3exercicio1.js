class Person {
	constructor(name, lastName, age, gender, interests) {
		this.name = name;
		this.lastName = lastName;
		if (isNaN(age)) {
			throw new Error("Please enter a valid age");
		}
		this.age = age;
		this.gender = gender;
		this.interests = interests;
		this.bio = `${this.name} is ${this.age} years old. I like ${this.interests}.`;
	}

	greet() {
		console.log(`Hi! I'm ${this.name}.`);
	}
}

let yuri = new Person("yuri", "march", "30", "masculine", "Programming and Video games");
console.log(yuri);
yuri.greet();

class Teacher extends Person {
	constructor(name, lastName, age, gender, interests, subject, bio) {
		super(name, lastName, age, gender, interests, bio);
		this.subject = subject;
	}

	greet() {
		console.log(`Hello. My name is ${this.name} ${this.lastName} and I teach ${this.subject}.`);
	}
}

let murillo = new Teacher(
	"murillo",
	"souza",
	26,
	"masculine",
	"Programming and Video games",
	"Javascript"
);

console.log(murillo);
murillo.greet();

class Student extends Person {
	constructor(name, lastName, age, gender, interests, bio) {
		super(name, lastName, age, gender, interests, bio);
	}

	greet() {
		console.log(`Yo! I'm ${this.name}.`);
	}
}

let yuri2 = new Student("yuri", "march", "30", "masculine", "Programming and Video games");

console.log(yuri2);
yuri2.greet();
