//idée -- ajout event guerre aléatoire une fois 2 planètes acquis -- ajout event invasion extraterreste

let score = 90;

function perSeconde(range){
    score += range;
     
     document.getElementById("").innerHTML = score //affichage
}
let fac1 = 0;
let fac2 = 0;
let fac3 = 0; 
let fac4 = 0;
let totalFac = fac1 + fac2 + fac3 + fac4



document.getElementById("clicks").addEventListener("click", () => { 
    score += 1;
    console.log(score);
})


document.getElementById("maison").addEventListener("click",()=>{
    let price = 100;
    if (score >= price) {
        score = score - 100;
        fac1 += 1;
        setInterval(perSeconde, 1000,fac1);
    }
    else{
        alert("insufficient sold")
    }
     
});

document.getElementById("appartement").addEventListener("click", () => { 
    let price = 400;
    if (score > price) {
        score = score - 400;
        fac2 += 10;
        setInterval(perSeconde, 1000, fac2);
    }
    else{
        alert("insufficient sold")
    }   
});

document.getElementById("ville").addEventListener("click", () => { 
    let price = 600;
    if (score > price) {
        score = score - 600;
        fac3 += 100;
        setInterval(perSeconde, 1000, fac3);
    }
    else{
        alert("insufficient sold")
    }
});

document.getElementById("planète").addEventListener("click", () => { 
    let price = 1000;
    if (score > price) {
        score = score - 1000;
        fac4 += 1000;
        setInterval(perSeconde, 1000, fac4);
    }
    else{
        alert("insufficient sold")
    }
});
