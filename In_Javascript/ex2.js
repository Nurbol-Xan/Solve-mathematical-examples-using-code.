// Logika
function yaqin_s_2(x, y) {
    let n = 100 - x;
    let m = 100 - y;
    if(n < m) {
        return x;
    } else {    
        return y;
    }
}

// Tayyor method bilan
function yaqin_s_1(x, y) {
    return Math.abs(100 - x) < Math.abs(100 - y) ? x : y;
}


console.log(yaqin_s_1(89, 90));
console.log(yaqin_s_2(89, 90));