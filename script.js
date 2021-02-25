//declaration des variables
let valueClick = 1;
let score = 0;
let priceM = 100;
let priceA = 400;
let priceV = 600;
let priceP = 1000;
let priceKP = 150;
let priceBG = 300;
let priceEM = 800;
let eventTime = 10000;//Math.floor(Math.random()*(300000-60000)+60000);


let fac1 = 0;
let fac2 = 0;
let fac3 = 0; 
let fac4 = 0;

//desactivation boutons multiplicateurs

document.getElementById("maison").disabled = true;
document.getElementById("appartement").disabled = true;
document.getElementById("ville").disabled = true;
document.getElementById("planète").disabled = true;
document.getElementById("katyperry").disabled = true;
document.getElementById("billgates").disabled = true;
document.getElementById("elonmusk").disabled = true;

//initialisation fonction eventRand

document.getElementById("cookiesActif").innerHTML = "People : " + score
let img = document.getElementById("clicksbonus");

//function evenement aleatoire

function eventRand() {

document.getElementById("clicksbonus").addEventListener("click", () =>{


let event = ["people by clic x2", "+1000 people","+100 people", "+ 10% people production","pandemia","x5 for 1 minute"];
let eventSelec = Math.floor(Math.random()*event.length);

switch(eventSelec){
    case 0 : valueClick = valueClick*2;
    document.getElementById("div1").style.visibility = "visible";
    document.getElementById("div1").innerHTML = "Activated bonus : "+ event[eventSelec];
    break;

    case 1 : score += 1000;
    document.getElementById("div1").style.visibility = "visible";
    document.getElementById("div1").innerHTML = "Activated bonus : "+ event[eventSelec];

    break;

    case 2 : score += 100;
    document.getElementById("div1").style.visibility = "visible";
    document.getElementById("div1").innerHTML = "Activated bonus : "+ event[eventSelec];
    
    break;

    case 3 : valueClick = valueClick + (Math.floor((valueClick/100)*10));
    document.getElementById("div1").style.visibility = "visible";
    document.getElementById("div1").innerHTML = "Activated bonus : "+ event[eventSelec];
    
    break;

    case 4 : score = score - (Math.floor((valueClick/100)*10));
    document.getElementById("div1").style.visibility = "visible";
    document.getElementById("div1").innerHTML = "Activated bonus : "+ event[eventSelec];
    break;

    case 5 : fac1 = fac1*5;
             fac2 = fac2*5;
             fac3 = fac3*5;
             fac4 = fac4*5;
             document.getElementById("div1").style.visibility = "visible";
             document.getElementById("div1").innerHTML = "Activated bonus : "+ event[eventSelec];
             setTimeout(() => {
                fac1 = fac1/5;
                fac2 = fac2/5;
                fac3 = fac3/5;
                fac4 = fac4/5;
                document.getElementById("div1").style.visibility = "hidden";
             }, 600000)
             
    break;
    }
    document.getElementById("div1").style.visibility = "hidden";
    setTimeout(eventRand, Math.floor(Math.random()*(300000-60000)+60000))

});

    setTimeout(eventRand, Math.floor(Math.random()*(300000-60000)+60000))
}




function perSeconde(range){
    score += range;
    let totalFac = fac1 + fac2 + fac3 + fac4;
    document.getElementById("cookiesActif").innerHTML = "People : " + score;
    document.getElementById("cookiesPerSec").innerHTML = "OFFspring: " + totalFac;
    disable()
    
}


let displayEvent = setTimeout(eventRand, 10000);


//gestion des boutons multiplicateurs

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
    if (score >= priceKP){
        document.getElementById("katyperry").disabled = false;
    }
    if (score >= priceBG){
        document.getElementById("billgates").disabled = false;
    }
    if (score >= priceEM){
        document.getElementById("elonmusk").disabled = false;
    }
}

document.getElementById("clicks").addEventListener("click", () => { 
    score += valueClick;
    document.getElementById("cookiesActif").innerHTML = "People : " + score
    disable()
})  


document.getElementById("maison").addEventListener("click",()=>{
    if (score >= priceM) {
        score -= priceM;
        fac1 += 1;
        priceM += (Math.floor(priceM/100*15))
        document.getElementById("cookiesActif").innerHTML = "People : " + score
        setInterval(perSeconde, 1000,fac1);
    }
});

document.getElementById("appartement").addEventListener("click", () => { 
    if (score > priceA) {
        score -= priceA;
        fac2 += 10;
        priceA += (Math.floor(priceA/100*15))
        document.getElementById("cookiesActif").innerHTML = "People : " + score
        setInterval(perSeconde, 1000, fac2);
    }
});

document.getElementById("ville").addEventListener("click", () => { 
    if (score > priceV) {
        score -= priceV;
        fac3 += 100;
        priceV += (Math.floor(priceV/100*15))
        document.getElementById("cookiesActif").innerHTML = "People : " + score
        setInterval(perSeconde, 1000, fac3);
    }
});

document.getElementById("planète").addEventListener("click", () => { 
    if (score > priceP) {
        score -= priceP;
        fac4 += 1000;
        priceP += (Math.floor(priceP/100*15))
        document.getElementById("cookiesActif").innerHTML = "People : " + score
        setInterval(perSeconde, 1000, fac4);
    }
});

document.getElementById("katyperry").addEventListener("click",()=>{
    if (score >= priceKP) {
        score -= priceKP;
        valueClick += 1;
        priceKP += (Math.floor(price/100*15));
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

