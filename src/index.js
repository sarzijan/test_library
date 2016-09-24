var uniqueRandomArray = require('unique-random-array');
var municipalities = require('./Municipality.json');

module.exports = {
    all: municipalities,
    test: uniqueRandomArray(municipalities)
};