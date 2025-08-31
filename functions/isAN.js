function isAN(value) {

    let evaluation = typeof (value);
    let result = false
    console.log(`value: ${value} is a ${evaluation}`);


    console.log(evaluation);
    if (evaluation === "number") {
        result = true
        console.log("this is a number")
        if (isNaN(value)) {
            result = false
        }
    } else if (evaluation === "object") {
        console.log("this is an object");
        if (value instanceof Number) {
            console.log("this is a number object");
            result = true;

        }
    }




    else {
        result = false;
        console.log("this is not a number")
    }

    return result
}


console.log(isAN(3))
console.log(isAN('123'))
console.log(isAN(Infinity))
console.log(isAN(new Number(123)))

export default isAN

