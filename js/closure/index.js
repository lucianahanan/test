
function myScope() {
    let count = 0
    return function () {
        return count += 1
    }
}

console.log(myScope())
console.log(myScope())
console.log(myScope())
console.log(myScope())





