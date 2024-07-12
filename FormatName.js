let inputString = " victor red ";
let outputString = inputString.trim().replace(/^ +| +$/g, '').replace
(/\b\w/g, function (match) {
    return match.toUpperCase();
});

console.log(outputString);
