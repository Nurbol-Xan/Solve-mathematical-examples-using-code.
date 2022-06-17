// Oson yo'l bilan yechganda
function yakuniy_im(ball, imt) {
    if (imt === "Yakuniy imtihon") {
        return ball >= 89 && ball <= 100;
    } else {
        return ball >= 90;
    }
}

console.log(yakuniy_im(89, "Yakuniy imtihon"));