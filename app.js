let arr = [2, 4, 9, 10, 45, 67, 8, 90]
let newarr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
        newarr.push(arr[i])
    }
}
alert(`All numbers:  ${arr}`);
alert(`Even numbers:  ${newarr}`);