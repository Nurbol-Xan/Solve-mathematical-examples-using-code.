// logika
function harf_bor(satr, harf) {
    let n = 0;
    for (let i = 0; i < satr.length; i++) {
        if (satr[i] == harf) {
            n++;
        }
    }
    return n >= 2 && n <= 4;
}

console.log(harf_bor("Nananan", "a"));
