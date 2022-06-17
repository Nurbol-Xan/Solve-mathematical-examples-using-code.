// method bilan
function soz(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        return str.substring(0, 2).toLowerCase() + str.substring(3);
    }
}

console.log(soz("Nananan"));