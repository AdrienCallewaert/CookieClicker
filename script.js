//idée -- ajout event guerre aléatoire une fois 2 planètes acquis -- ajout event invasion extraterreste

let score = 0;
let perSeconde= 0
let autoC = setInterval(perSeconde, 1000)
let click;


document.getElementById("clicks").addEventListener("click", () => { 
    score += 1
    console.log(score);

})


document.getElementById("maison").addEventListener("click", () => { 
    perSeconde += 1
    console.log(autoC);

})

document.getElementById("appartement").addEventListener("click", () => { 
    perSeconde += 10
})

document.getElementById("ville").addEventListener("click", () => { 
    perSeconde += 100
})

document.getElementById("planète").addEventListener("click", () => { 
    perSeconde += 1000
})


setInterval(perSeconde, 1000)

//document.getElementById("").innerHTML= score
//document.getElementById("").innerHTML= perSeconde
//document.getElementById("").innerHTML= click

