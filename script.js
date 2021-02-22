//idée -- ajout event guerre aléatoire une fois 2 planètes acquis -- ajout event invasion extraterreste

let score = 0;
let autoC;
let clique;

document.querySelector('#clicks').addEventListener('click',()=>{
    score++;
    document.getElementById("clicks").textContent = score;
})



