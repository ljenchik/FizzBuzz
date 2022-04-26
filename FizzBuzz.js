function FizzBuzz() {
    let divisors = [3, 5, 7]
    let words = ["Fizz", "Buzz", "Bang"]
    for (let i = 1; i <= 100;  i++)
    {
        let toPrint = ""
        if (i % 11 === 0) 
        {
            toPrint = 'Bong'
            continue;
        }
        for (let j = 0; j < divisors.length; j++)
        {
            if (i % divisors[j] === 0) 
            {
                toPrint += words[j] 
            }
        }
        if (toPrint === "") 
        {
            console.log(i)
        }
        else {
            console.log(toPrint)
        }
    }
}


FizzBuzz();
