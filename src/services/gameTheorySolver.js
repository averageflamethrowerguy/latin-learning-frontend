
function factorial(n) {
    let factorial = 1
    let multiplier = n
    while (multiplier > 1) {
        factorial *= multiplier
        multiplier -= 1
    }
    return factorial
}

function combination(n, k) {
    return factorial(n) / (factorial(k) * factorial(n-k))
}

function evaluateEquation({p, n, k, c, b}) {
    return -c + (b*combination(n-1, k-1)*Math.pow(p, k-1)*Math.pow(1-p, n-k))
}

function solver({n, k, c, b}) {
    const numberSteps = 1000
    let equationMin = 10000
    let minProbability = 0
    for (let pLarge=0; pLarge < numberSteps; pLarge++) {
        let result = evaluateEquation({p: pLarge/numberSteps, n, k, c, b})
        if (Math.abs(result) < Math.abs(equationMin)) {
            // console.log(equationMin)
            equationMin = result
            minProbability = pLarge/numberSteps
        }
    }

    return minProbability
}

// call the solver
let result = solver({n: 20, k: 4, b: 5, c: 1})
console.log("result")
console.log({result})