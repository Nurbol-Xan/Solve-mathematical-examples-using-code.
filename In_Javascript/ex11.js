// Logika
function uchta_son(x,y,z) {
    if (x == y && y == z) {
        return 30;
    } else if (x == y || y == z || x == z) {
        return 20;
    } else {
        return 40;
    }
}

console.log(uchta_son(15,54,49));