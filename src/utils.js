function getRandomObjectKey(obj) {
	return getRandomArrayElement(Object.keys(obj));
}

function getRandomArrayElement(arr) {
	return arr[getRandomInteger(0, arr.length)];
}

function getRandomInteger(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min)) + min;
}

module.exports = {
	getRandomObjectKey: getRandomObjectKey,
	getRandomArrayElement: getRandomArrayElement
};
