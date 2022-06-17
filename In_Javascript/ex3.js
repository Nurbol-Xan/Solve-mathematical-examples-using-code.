// Oson yo'l bilan yechganda
function oraliq_1(x, y){
    return (x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && y <= 100 && y >= 70 && y <= 100);
}

// if bilan yechganda
function oraliq_2(x, y){
    if(x >= 40 && x <= 60 && y >= 40 && y <= 60){
        return true;
    }else if(x >= 70 && y <= 100 && y >= 70 && y <= 100){
        return true;
    }else{
        return false;
    }
}

console.log(oraliq_1(50, 89));
console.log(oraliq_2(50, 89));