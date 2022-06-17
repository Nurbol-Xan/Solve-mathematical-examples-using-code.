// Logika
function katta_s_1(x, y){
    if(x >= 40 && x <= 60 && y >= 40 && y <= 60 && x > y){
        return x;
    }else if(x >= 40 && x <= 60 && y >= 40 && y <= 60 && y > x){
        return y;
    }
}

// Tayyor method bilan
function katta_s_2(x, y){
    if(x >= 40 && x <= 60 && y >= 40 && y <= 60){
        return Math.max(x, y);
    }
}

// function katta_s_3(x, y){
//    return (x >= 40 && x <= 60 && y >= 40 && y <= 60) ? (x > y) : x ? (y > x) : y;
// }

console.log(katta_s_1(50, 56));
console.log(katta_s_2(50, 56));
// console.log(katta_s_3(59, 56));