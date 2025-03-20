//write a boolean function to find a given number is prime
function isPrime(a){
    let primeNumber = true
    if(a == 1){
         primeNumber = false
    } else {
        for(let i = 2; i <= a/2; i++){
            if(a % i == 0){
                 primeNumber = false
            }
        }
    }
    return primeNumber
}

function primeChecker(a, isPrime){
    if(isPrime){
        console.log(a + " is a prime number")
    } else {
        console.log(a + " is not a prime number")
    }
}

primeChecker(10, isPrime(10))
primeChecker(7, isPrime(7))