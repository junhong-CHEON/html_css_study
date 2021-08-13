const max = 10;
let oddSum = 0;
let evenSum = 0;

for (let i=1; i<=max; i++) {
    if (i % 2 == 0) {
        console.log(i + "는 짝수");
        evenSum += i;
    } else {
        console.log(i + "는 홀수");
        oddSum += i;
    }
}

console.log("1~" + max + "까지 홀수들의 합: " + oddSum);
console.log("1~" + max + "까지 짝수들의 합: " + evenSum);