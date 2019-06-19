const jobs = require("../conf/jobs.json");
const traits = require("../conf/traits.json");
const pronouns = [ 'he/him', 'she/her', 'they/them' ];
const nameMaker = require("name-maker");

function generateCharacter() {	
	return `${getFirstName()} (${getPronouns()}), the ${getTrait()} ${getJobAndQuest()}`;
}

function getFirstName() {
	return nameMaker.GeneratorMain.generateNames('human', 1)[0].split(' ')[0];
}

function getPronouns() {
	return pronouns[getRandomInteger(0, pronouns.length)];
}

function getTrait() {
	return traits.Traits[getRandomInteger(0, traits.Traits.length)];
}

function getJobAndQuest() {
	let job = Object.keys(jobs)[getRandomInteger(0, Object.keys(jobs).length)];
	let quest = jobs[job][getRandomInteger(0, jobs[job].length)];
	return `${job} who seeks ${quest}.`;
}

function getRandomInteger(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min)) + min;
}

console.log(generateCharacter());
