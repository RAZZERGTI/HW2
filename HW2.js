let term = {
    Ukraine: 9,
    Russia: 5,
    Belarus: 2,
    Spain: 19,
    Poland: 6,
}
console.log(term);

let sum = 0;
for (let i in term) sum += term[i];
let average = sum / Object.keys(term).length;
console.log("1) Средняя температура всех стран: " + average);

function maxTerm(obj) {
    let max = 0;
    for (let i in obj) {
        if (max < obj[i]) max = obj[i];
    }
    return max;
}
let max = maxTerm(term);
console.log("2) Максимальная температура всех стран: " + max);