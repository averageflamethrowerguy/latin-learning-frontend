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

/**
 * This code produces the upper bound of chess states of 1.186 * 10^43 chess states.
 * Note that this code does not consider pawn promotion.
 * https://arxiv.org/abs/2112.09386
 * ^ this is the best bound for non-promotion chess, with 10^34 states.
 *
 * @returns {number}
 */

function  numberChessStates() {
    let stateCount = 0
    let cellCount = 64

    // Pawns for Player 1
    for (let pawnCount1 = 0; pawnCount1 <= 8; pawnCount1++) {
        // Pawns for Player 2
        for (let pawnCount2 = 0; pawnCount2 <= 8; pawnCount2++) {
            // rooks for Player 1
            for (let rookCount1= 0; rookCount1 <= 2; rookCount1++) {
                // rooks for Player 2
                for (let rookCount2 = 0; rookCount2 <= 2; rookCount2++) {
                    // bishops for Player 1
                    for (let bishopCount1 = 0; bishopCount1 <= 2; bishopCount1++) {
                        // bishops for Player 2
                        for (let bishopCount2 = 0; bishopCount2 <= 2; bishopCount2++) {
                            // knights for Player 1
                            for (let knightCount1 = 0; knightCount1 <= 2; knightCount1++) {
                                // knights for Player 2
                                for (let knightCount2 = 0; knightCount2 <= 2; knightCount2++) {
                                    // queens for Player 1
                                    for (let queenCount1 = 0; queenCount1 <= 1; queenCount1++) {
                                        // queens for Player 2
                                        for (let queenCount2=0;queenCount2 <= 1; queenCount2++) {
                                            let upToBishops = cellCount-pawnCount1-pawnCount2-rookCount1-rookCount2-bishopCount1-bishopCount2

                                            stateCount += combination(cellCount, pawnCount1) *
                                                combination(cellCount-pawnCount1, pawnCount2) *
                                                combination(cellCount-pawnCount1-pawnCount2, rookCount1) *
                                                combination(cellCount-pawnCount1-pawnCount2-rookCount1, rookCount2) *
                                                combination(cellCount-pawnCount1-pawnCount2-rookCount1-rookCount2, bishopCount1) *
                                                combination(cellCount-pawnCount1-pawnCount2-rookCount1-rookCount2-bishopCount1, bishopCount2) *
                                                combination(upToBishops, knightCount1) *
                                                combination(upToBishops-knightCount1, knightCount2) *
                                                combination(upToBishops-knightCount1-knightCount2, queenCount1) *
                                                combination(upToBishops-knightCount1-knightCount2-queenCount1, queenCount2) *
                                                combination(upToBishops-knightCount1-knightCount2-queenCount1-queenCount2, 1) *
                                                combination(upToBishops-knightCount1-knightCount2-queenCount1-queenCount2-1, 1)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return stateCount
}
console.log(numberChessStates())