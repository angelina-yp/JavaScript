let arr = [1, 2, 3, 4]
function f4(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr2.push(arr[i])
        }
    }
    if (arr2.length === 0) {
        console.log("No even numbers")
    } else {
        console.log(arr2)
    }
}
f4(arr)