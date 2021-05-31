function countStats(data) {
    return data.reduce((acc, curr) => {
        return {
            matches: acc.matches + parseInt(curr.matches),
            tries: acc.tries + parseInt(curr.tries)
        }
    }, {
        matches: 0,
        tries: 0
    });

    // we start with an object acc which is:
    //{
    //     matches: 0,
    //     tries: 0
    //}
    //refer to matches in acc by acc.matches
    //then for each object in the list add on match number (use parseInt to change
    //the string to a number)
}

const json = process.argv[2];
if (json === undefined) {
    throw new Error(`input not supplied`);
}
// include the json file via node's module system,
// this parses the json file into a JS object
// NOTE: this only works via node and will not work in the browser
const stats = require(`./${json}`);

console.log(countStats(stats.results));