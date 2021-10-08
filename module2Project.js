// EXERCICIOS MODULO 2

const makeStrings = (arr) =>
	arr.map((person) =>
		person.age < 18 ? `${person.name} is under age!!` : `${person.name} can go to The Matrix!`
	);

// Tentativa de refatoramento
const isEighteen = (person) => {
	if (person.age < 18) {
		return `${person.name} is under age!!`;
	}
	return `${person.name} can go to The Matrix!`;
};

const makeStrings2 = (arr) => arr.map((person) => isEighteen(person));

console.log(
	makeStrings2([
		{
			name: "Angelina Jolie",
			age: 80,
		},
		{
			name: "Eric Jones",
			age: 2,
		},
		{
			name: "Paris Hilton",
			age: 5,
		},
		{
			name: "Kayne West",
			age: 16,
		},
		{
			name: "Bob Ziroll",
			age: 100,
		},
	])
);

var voters = [
	{ name: "Bob", age: 30, voted: true },
	{ name: "Jake", age: 32, voted: true },
	{ name: "Kate", age: 25, voted: false },
	{ name: "Sam", age: 20, voted: false },
	{ name: "Phil", age: 21, voted: true },
	{ name: "Ed", age: 55, voted: true },
	{ name: "Tami", age: 54, voted: true },
	{ name: "Mary", age: 31, voted: false },
	{ name: "Becky", age: 43, voted: false },
	{ name: "Joey", age: 41, voted: true },
	{ name: "Jeff", age: 30, voted: true },
	{ name: "Zack", age: 19, voted: false },
];

const getVoterResults = (array) =>
	array.reduce(
		(totals, person) => {
			return {
				numYoungVotes:
					person.age >= 18 && person.age <= 25 && person.voted
						? (totals.numYoungVotes += 1)
						: totals.numYoungVotes,
				numYoungPeople:
					person.age >= 18 && person.age <= 25
						? (totals.numYoungPeople += 1)
						: totals.numYoungPeople,
				numMidVotes:
					person.age > 25 && person.age <= 35 && person.voted
						? (totals.numMidVotes += 1)
						: totals.numMidVotes,
				numMidsPeople:
					person.age > 25 && person.age <= 35 ? (totals.numMidsPeople += 1) : totals.numMidsPeople,
				numOldVotes:
					person.age > 35 && person.age > 35 && person.voted
						? (totals.numOldVotes += 1)
						: totals.numOldVotes,
				numOldsPeople:
					person.age > 35 && person.age > 35 ? (totals.numOldsPeople += 1) : totals.numOldsPeople,
			};
		},
		{
			numYoungVotes: 0,
			numYoungPeople: 0,
			numMidVotes: 0,
			numMidsPeople: 0,
			numOldVotes: 0,
			numOldsPeople: 0,
		}
	);

console.log(getVoterResults(voters));
console.log("REFATORAMENTO");

// Tentativa de refatoramento

const YOUNG_AGE_RANGE = { lowerLimit: 18, upperLimit: 25 };
const MID_AGE_RANGE = { lowerLimit: 26, upperLimit: 35 };
const OLD_AGE_RANGE = { lowerLimit: 36, upperLimit: 55 };

let checkAgeGroup = (person, ageRange) => {
	return ageRange.lowerLimit <= person.age && person.age <= ageRange.upperLimit ? true : false;
};

let handleVoter = (voteProperty, ageGroupProperty) => (totals, person) => ({
	...totals,
	[voteProperty]: person.voted ? totals[voteProperty] + 1 : totals[voteProperty],
	[ageGroupProperty]: totals[ageGroupProperty] + 1,
});

let handleYoungVoter = handleVoter("numYoungVotes", "numYoungPeople");
let handleMidVoter = handleVoter("numMidVotes", "numMidPeople");
let handleOldVoter = handleVoter("numOldVotes", "numOldPeople");

let getVoterResults2 = (array) =>
	array.reduce(
		(totals, person) => {
			if (checkAgeGroup(person, YOUNG_AGE_RANGE)) {
				return handleYoungVoter(totals, person);
			} else if (checkAgeGroup(person, MID_AGE_RANGE)) {
				return handleMidVoter(totals, person);
			} else if (checkAgeGroup(person, OLD_AGE_RANGE)) {
				return handleOldVoter(totals, person);
			}
		},
		{
			numYoungVotes: 0,
			numYoungPeople: 0,
			numMidVotes: 0,
			numMidPeople: 0,
			numOldVotes: 0,
			numOldPeople: 0,
		}
	);

console.log(getVoterResults2(voters));

//EXERCICIO: CRIAR UM MODULO CALCULADORA COM + - * / =

// FUNCAO DE LISTAR TODAS AS OPERACOES JA EXECUTADAS NA CALCULADORA
// COM SEUS RESULTADOS

// FUNCAO RESET

let calculator = {
	listOfOperations: [],

	listOperation: function (number1, number2, operator) {
		return this.listOfOperations.push({
			operation: `${number1} ${operator} ${number2} = ${result}`,
		});
	},

	sum: function (number1, number2) {
		operator = "+";
		result = number1 + number2;
		this.listOperation(number1, number2, operator);
		return result;
	},

	multiply: function (number1, number2) {
		result = number1 * number2;
		operator = "*";
		this.listOperation(number1, number2, operator);
		return result;
	},

	substract: function (number1, number2) {
		result = number1 - number2;
		operator = "-";
		this.listOperation(number1, number2, operator);
		return result;
	},

	divide: function (number1, number2) {
		result = number1 / number2;
		operator = "/";
		this.listOperation(number1, number2, operator);
		return result;
	},

	reset: function () {
		this.number1 = 0;
		this.number2 = 0;
		this.listOfOperations = [];
		return `List of operations reseted.`;
	},
};
