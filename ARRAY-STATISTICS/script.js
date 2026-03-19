console.log("hello javscript");

function capitalizeFirstLetter(string) {
    string = string[0].toUpperCase() + string.slice(-1)
    return string
}

function findLetterinAString(string, letter){
    const indexes = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter.toLowerCase()) {
            indexes.push(i)
        }
    }

    if (indexes.length === 0) {
        return `The letter '${letter}' is not found in "${string}".`
    }

    return `The letter '${letter}' is found ${indexes.length} time(s) at index(es): ${indexes.join(", ")}.`
}


function findNumberInArray(array, number){
    const indexes = []
    for(let i = 0 ; i <array.length; i++){
        if(array[i] === number){
            indexes.push(i)
        }
    }

    if(indexes.length === 0){
        return `The number ${number} is not found in the array.`
    }

    return `the number ${number} is found ${indexes.length} time(s) at ${indexes.join(",")}`
}

console.log(capitalizeFirstLetter("hello "));
console.log(capitalizeFirstLetter("honore "));
console.log(findLetterinAString("hello world7","O"))
console.log(findNumberInArray([1, 2, 3, 4, 5], 3))