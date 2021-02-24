// fonction mousemove

document.addEventListener("mousemove" , parallax);
            function parallax(e){
                this.querySelectorAll('.layer').forEach(layer => {
                    const speed = layer.getAttribute('data-speed')

                    const x = (window.innerWidth - e.pageX*speed)/100
                    const y = (window.innerHeight - e.pageY*speed)/100

                    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
                    
                })
            }



// fonction pour afficher le bonus         
function showDiv1() {
            document.getElementById("div1").style.visibility = "visible";
            }
            setTimeout("showDiv1()", 15000); // aprés 15 sec



// fonction pour masqué le bonus
function displayokDiv1() {
            document.getElementById("div1").style.visibility = "hidden";
            }
            setTimeout("displayokDiv1()", 30000); // aprés 30 sec
    

