function indexOfB(arr)
{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith("B")) {
            return i
        }
    }
    return -1
}
    
function FizzBuzz() {
    for (let i = 1; i <= 255; i++) {
        let result = []
        if (i % 3 === 0) {
            result.push("Fizz")
        }
        if (i % 5 === 0) {
            result.push("Buzz")
        }
        if (i % 7 === 0) {
            result.push("Bang")  
        }
        if (i % 11 === 0) {
            result = ["Bong"]
        }
        if (i % 13 === 0) {
            if (indexOfB(result) === -1) 
            {
                result.push("Fezz")
            }
            else 
            {
                result.splice(indexOfB(result), 0, "Fezz")
            }
        }
        if (i % 17 === 0) {
            result.reverse();
        }
        if (result.length === 0) 
        {
        result.push(i.toString());
        }
    console.log(result.join(""))
    }
}

FizzBuzz();
