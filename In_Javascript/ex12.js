// Rejim
function rejim(x, y, z) {
    if (x < y && y < z) {
        return "Qattiq rejim";
    } else if (x <= y && y <= z) {
        return "Yumshoq rejim";
    } else {
        return "Bu hato";
    }
}

console.log(rejim(1, 2, 3));