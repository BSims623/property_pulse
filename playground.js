function toCamelCase(str) {
    return str.replace(/\-/g, '_').split('_').map((x, i) => i === 0 ? x : x[0].toUpperCase() + x.slice(1)).join('');
}

console.log(toCamelCase('The_pippi-wasSavage'))

function sortThing(arr) {
    return arr.sort((a, b) => b - a)
}

const array = Array.from({ length: 10 }, (_, i) => i + 1);

console.log(array);
console.log(sortThing(array))

const theObject = {
    "rates": {
        "weekly": 1100,
        "monthly": 4200
    },
}

console.log(Object.entries(theObject.rates))

Object.entries(theObject.rates).map((x) => console.log(x[0], x[1]))