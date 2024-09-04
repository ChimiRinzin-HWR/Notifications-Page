const mark = document.querySelector(".mark");
const seccion = document.querySelectorAll(".seccion");
const notnum = document.querySelector(".notnum");
const reddot = document.querySelectorAll(".reddot");

var unreads = 0;

reddot.forEach(rd => {
    if(rd.style.display != "none"){
        unreads++;
    }
})
notnum.textContent = unreads;
mark.addEventListener("click", function(){
    reddot.forEach(rd => {
        rd.style.display = "none";
    })
    seccion.forEach(sc => {
        sc.style.backgroundColor = "white";
    })

    var unreads1 = 0
    reddot.forEach(rd => {
        if(rd.style.display != "none"){
            unreads1++;
        }
        notnum.textContent = unreads1;
    })
})