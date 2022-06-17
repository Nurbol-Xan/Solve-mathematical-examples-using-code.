// Logika
function uchta_son(x,y,z) {
    if (x >= 20 && x < y || x < z) {
        return x;
    } else if (y >= 20 && y < x || y < z) {
        return y;
    } else if (z >= 20 && z < x || z < y) {
        return z;
    }
}

console.log(uchta_son(15,54,49));