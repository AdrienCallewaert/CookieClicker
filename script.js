//idée -- ajout event guerre aléatoire une fois 2 planètes acquis -- ajout event invasion extraterreste

let valueClick = 1;
let score = 95;
let priceM = 100;
let priceA = 400;
let priceV = 600;
let priceP = 1000;
let priceKP = 150;
let priceBG = 300;
let priceEM = 800;
let eventTime = Math.floor(Math.random()*(300000-60000)-60000);


let fac1 = 0;
let fac2 = 0;
let fac3 = 0; 
let fac4 = 0;

document.getElementById("maison").disabled = true;
document.getElementById("appartement").disabled = true;
document.getElementById("ville").disabled = true;
document.getElementById("planète").disabled = true;


document.getElementById("cookiesActif").innerHTML = "Cookies : " + score

function eventRand() {

let event = ["x2", "+1000 habitants","+100 habitants", "+ 10% production habitant","maladie","x5 pendant une minute"];
let eventSelec = Math.floor(Math.random()*event.length); 

switch(eventSelec){
    case 0 : valueClick = valueClick*2;
    alert("test")
    break;

    case 1 : score += 1000;
    alert("test")

    break;

    case 2 : score += 100;
    alert("test")
    
    break;

    case 3 : valueClick = valueClick + (Math.floor((valueClick/100)*10));
    alert("test")
    
    break;

    case 4 : score = score - (Math.floor((valueClick/100)*10));
    alert("test")
    
    break;

    case 5 : fac1 = fac1*5;
             fac2 = fac2*5;
             fac3 = fac3*5;
             fac4 = fac4*5;
             alert("test")
             setTimeout(() => {
                fac1 = fac1/5;
                fac2 = fac2/5;
                fac3 = fac3/5;
                fac4 = fac4/5;
                alert("test2")
             }, 600000)
    break;
    }

    setTimeout(eventRand, Math.floor(Math.random()*(300000-60000)-60000))
}


function disable() {    
    document.getElementById("maison").disabled = true;
    document.getElementById("appartement").disabled = true;
    document.getElementById("ville").disabled = true;
    document.getElementById("planète").disabled = true;

    if (score >= priceM){
        document.getElementById("maison").disabled = false;
    }
    if (score >= priceA){
        document.getElementById("appartement").disabled = false;
    }
    if (score >= priceV){
        document.getElementById("ville").disabled = false;
    }
    if (score >= priceP){
        document.getElementById("planète").disabled = false;
    }
    if (score >= priceK){
        document.getElementById("KatyPerry").disabled = false;
    }
    if (score >= priceB){
        document.getElementById("BillGates").disabled = false;
    }
    if (score >= priceE){
        document.getElementById("ElonMusk").disabled = false;
    }
}

function perSeconde(range){
    score += range;
    let totalFac = fac1 + fac2 + fac3 + fac4;
    document.getElementById("cookiesActif").innerHTML = "Cookies : " + score;
    document.getElementById("cookiesPerSec").innerHTML = "CPS : " + totalFac;
    disable()
    
}

let displayEvent = setTimeout(eventRand, eventTime);

document.getElementById("clicks").addEventListener("click", () => { 
    score += valueClick;
    document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
    disable()
})  


document.getElementById("maison").addEventListener("click",()=>{
    if (score >= priceM) {
        score -= priceM;
        fac1 += 1;
        priceM += (Math.floor(priceM/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000,fac1);
    }
});

document.getElementById("appartement").addEventListener("click", () => { 
    if (score > priceA) {
        score -= priceA;
        fac2 += 10;
        priceA += (Math.floor(priceA/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000, fac2);
    }
});

document.getElementById("ville").addEventListener("click", () => { 
    if (score > priceV) {
        score -= priceV;
        fac3 += 100;
        priceV += (Math.floor(priceV/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000, fac3);
    }
});

document.getElementById("planète").addEventListener("click", () => { 
    if (score > priceP) {
        score -= priceP;
        fac4 += 1000;
        priceP += (Math.floor(priceP/100*15))
        document.getElementById("cookiesActif").innerHTML = "Cookies : " + score
        setInterval(perSeconde, 1000, fac4);
    }
});

document.getElementById("galaxie").addEventListener("click",()=>{
    if (score >= price) {
        score -= price;
        valueClick += 1;
        price += (Math.floor(price/100*15));
    }
});

document.getElementById("billgates").addEventListener("click",()=>{
    if (score >= priceBG) {
        score -= priceBG;
        valueClick += 1;
        priceBG += (Math.floor(priceM/100*15))
    }
});

document.getElementById("elonmusk").addEventListener("click",()=>{
    if (score >= priceEM) {
        score -= priceEM;
        valueClick += 1;
        priceEM += (Math.floor(priceM/100*15))
    }
});

