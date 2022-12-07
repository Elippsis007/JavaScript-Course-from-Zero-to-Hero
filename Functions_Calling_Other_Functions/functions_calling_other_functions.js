
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(2, 3));

/* the 2 is the argument for apples, calling the cutPieces function replacing the fruit
    parameter is now also 2.
    and as 2 is fruit it will be then multiplied by 4 so the return value will be 8 cut pieces
    for apples which is now applePieces part of the literal template.
*/