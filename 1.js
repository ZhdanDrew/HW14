const str = "123456";

function Sum(str) {
    let sum = 0;
    for (let obj of str) {
        sum += parseInt(obj);
    }
    return sum > str.length;
}

console.log(Sum(str), "1 задание");