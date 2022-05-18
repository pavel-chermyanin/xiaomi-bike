function squareIt(int) {
    const strFromNum = int.toString()
    const square = Math.sqrt(strFromNum.length)
    const pattern = new RegExp(`${'.'.repeat(square)}`, 'g')
    return Number.isInteger(square) ?
        strFromNum.match(pattern).join('\n') : 'Not a perfect square!'
}
console.log(squareIt(112141568, "112\n141\n568"));