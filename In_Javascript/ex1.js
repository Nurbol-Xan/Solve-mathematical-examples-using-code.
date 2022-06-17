// Logika bilan yechganda
function katta_s(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}

// funksiya bilan yechganda
function katta_s_2(x, y, z) {
   return Math.max(x, y, z);
}

// Oson yo'l bilan yechganda
function katta_s_3(x, y, z) {
    return (x > y && x > z) ? x : (y > x && y > z) ? y : z;
}

console.log(katta_s(10, 20, 30));
console.log(katta_s_2(10, 20, 30));
console.log(katta_s_3(10, 20, 30));
