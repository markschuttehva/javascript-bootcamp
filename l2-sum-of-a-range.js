//First exercise
function range(first, last) {
    var list = [];

    for (var i = first; i <= last; i++) {
        //push adds the varriabel to the list
        list.push(i);
        // push() to add to the end of an array.
        // unshift() to add to the beginning of an array.
        // splice() to add elements within an array.
    }
    return list;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//second exercise
function range1(first, last, minus) {
    var list = [];

    for (var i = first; i >= last; i = i + minus) {
        //push adds the varriabel to the list
        list.push(i);
        // push() to add to the end of an array.
        // unshift() to add to the beginning of an array.
        // splice() to add elements within an array.
    }
    return list;
}

console.log(range1(5, 2, -1));
// → [5, 4, 3, 2]



//Third exercise 
//get values from range
function sum(values) {
    var calculate = 0;
    //values → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (i = 0; i < values.length; i++) {
        //adds the number in value to calculate
        calculate = calculate + values[i];
    }
    console.log(calculate);
}

console.log(sum(range(1, 10)));
// 55