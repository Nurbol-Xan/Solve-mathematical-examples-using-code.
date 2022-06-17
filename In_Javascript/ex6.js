// Logika
function ohirgi_r(x, y, z) {
    return (x % 10 == y % 10 && y % 10 == z % 10);
}

console.assertlog(ohirgi_r(10, 20, 30));