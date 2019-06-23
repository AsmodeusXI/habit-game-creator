// Utility functions and required modules
const utils = require("./utils.js");
const nameMaker = require("name-maker");

// Config files and arrays
const genres = require("../conf/genres.json");
const traits = require("../conf/traits.json");
const pronouns = [ 'he/him', 'she/her', 'they/them' ];

function generateCharacter() {	
	return `${getFirstName()} (${getPronouns()}), the ${getTrait()} ${getJobAndQuest()}`;
}

function getFirstName() {
	return nameMaker.GeneratorMain.generateNames('human', 1)[0].split(' ')[0];
}

function getPronouns() {
	return utils.getRandomArrayElement(pronouns);
}

function getTrait() {
	return utils.getRandomArrayElement(traits.Traits);
}

function getJobAndQuest() {
	let genre = utils.getRandomObjectKey(genres);
	let job = utils.getRandomObjectKey(genres[genre]);
	let quest = utils.getRandomArrayElement(genres[genre][job]);
	return `${job} who seeks ${quest}.`;
}

module.exports = {
	generateCharacter: generateCharacter
};
