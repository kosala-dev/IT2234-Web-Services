//Find sum by rest parameters
const FindSum = (...n)=> {
    let sum = 0;
    for(let c of n){
        sum += c
    }
    return sum
}

console.log("Sum: " + FindSum(7,8,9,4,2,5))