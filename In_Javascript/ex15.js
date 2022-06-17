// Logika
function uchta_son(x,y,z) {
    if (x == 15 || y == 15 || z == 15) {
        return true;
    } else if (x + y == 15 || x + z == 15 || y + z == 15) {
        return true;
    } else if (x - y == 15 || x - z == 15 || y - z == 15) {
        return true;
    } else {
        return false;
    }
}

console.log(uchta_son(15,54,49));