//idée -- ajout event guerre aléatoire une fois 2 planètes acquis -- ajout event invasion extraterreste

let valueClick = 1;
let score = 10000;
let priceM = 100;
let priceA = 400;
let priceV = 600;
let priceP = 1000;
let timeEvent = Math.floor(Math.random()*(300000-60000)-60000);


let fac1 = 0;
let fac2 = 0;
let fac3 = 0; 
let fac4 = 0;
let i = 0;

function eventRand() {

let event = ["x2", "+1000 habitants","+100 habitants", "+ 10% production habitant","maladie","x5 pendant une minute"];
let eventselec = 5 /*Math.floor(Math.random()* event.length);*/
i ++;


switch(eventselec){
    case 0 : valueClick = valueClick*2;
             alert("eventgood")
    break;

    case 1 : score = score + 1000;
    alert("eventgood")
    break;

    case 2 : score = score + 100;
    alert("eventgood")
    break;

    case 3 : valueClick = valueClick + (Math.floor((valueClick/100)*10));
    alert("eventgood")
    break;

    case 4 : score = score - (Math.floor((valueClick/100)*10));
    alert("eventgood")
    break;

    case 5 : fac1 = fac1*5;
             fac2 = fac2*5;
             fac3 = fac3*5;
             fac4 = fac4*5;
             setTimeout(())
             alert("eventgood")
    break;
}
}


let displayEvent = setTimeout(eventRand, 5000)
if (i == 10000){
clearTimeout(displayEvent)}








document.getElementById("cookiesActif").innerHTML = "Cookies : " + score


function perSeconde(range){
    score += range;
    let totalFac = fac1 + fac2 + fac3 + fac4
    document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
    document.getElementById("cookiesPerSec").innerHTML = "CPS : " + totalFac
}


document.getElementById("clicks").addEventListener("click", () => { 
    score += valueClick;
    document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
    console.log(score);
})


document.getElementById("maison").addEventListener("click",()=>{
    if (score >= priceM) {
        score = score - 100;
        fac1 += 1;
        priceM += (Math.floor(priceM/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000,fac1);
    }
    else{
        alert("insufficient sold")
    }
     
});

document.getElementById("appartement").addEventListener("click", () => { 
    if (score > priceA) {
        score = score - 400;
        fac2 += 10;
        priceA += (Math.floor(priceA/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000, fac2);
    }
    else{
        alert("insufficient sold")
    }   
});

document.getElementById("ville").addEventListener("click", () => { 
    if (score > priceV) {
        score = score - 600;
        fac3 += 100;
        priceV += (Math.floor(priceV/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000, fac3);
    }
    else{
        alert("insufficient sold")
    }
});

document.getElementById("planète").addEventListener("click", () => { 
    if (score > priceP) {
        score = score - 1000;
        fac4 += 1000;
        priceP += (Math.floor(priceP/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000, fac4);
    }
    else{
        alert("insufficient sold")
    }
});


setTimeout(() => {let damage = setInterval(() => {score -= 1}, 500);}, randNumber);
