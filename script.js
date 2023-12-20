function chunkString(inputString, chunkLength) {
    if (inputString === null) {
        return [];
    }

    const result = [];
    let index = 0;

    while (index < inputString.length) {
        const chunk = inputString.substr(index, chunkLength);
        result.push(chunk);
        index += chunkLength;
    }

    return result;
}

// Examples
console.log(chunkString("Hello, world!", 5));  // Output: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));           // Output: ["12", "34", "5"]
console.log(chunkString("abc", 5));              // Output: ["abc"]
console.log(chunkString(null, 5));               // Output: []


// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
