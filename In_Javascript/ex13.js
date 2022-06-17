// Logika
function ohirgi_r(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10);
    }
}

console.log(ohirgi_r(15, 25, 35));