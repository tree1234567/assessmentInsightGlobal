

//#1:


//I'm not sure how I would be using node here though I could wrap it with a module.exports and then call it in the node server
module.exports = {
    function(intA, intB, total = 0) {

        if (intB === 0) {
            return total;
        }

        total += intA + intA
        intB -= 1
        return multiply(intA, intB, total);
    }
}

// the function's orginaly name was multiply
console.log(multiply(100, 505));

//#2:

function allPermutations(str) {
    if (str.length === 1) {
        return str;
    }

    var permutations = [];
    for (var x = 0; x < str.length; x = x + 1) {
        var char = str[x];

        if (str.indexOf(char) != x) { continue }

        var remainingStr = str.slice(0, x) + str.slice(x + 1, str.length);

        for (var subPermut of allPermutations(remainingStr))
            permutations.push(char + subPermut)

    }
    return permutations;
}

console.log(allPermutations("fdsa"))


//#3:

// Not enough time :( this one looks like the most fun to figure out though!
function myStringify(obj) {
    myStr = '"' + obj + '"';
    return myStr;
}
var obj = { object: "key" };
console.log(myStringify(obj));
