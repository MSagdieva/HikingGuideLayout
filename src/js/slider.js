let slyder = document.querySelector('.slider-text');
for (let i = 1; i<=3; i++){
classAdder(slyder, i);
}

function classAdder(elem, i) {
    elem.querySelector('.text1:nth-child('+(i+1)+')').addEventListener("click", () => {
        document.querySelector(".main_content .info-block:nth-child("+i+")").classList.add("_active");
        setTimeout(()=>{document.querySelector(".main_content .info-block:nth-child("+i+") .text-container__number").scrollIntoView({ behavior: 'smooth' })},400);
        document.querySelector(".slider-indicator").style.top=25*i+"%";
    });
}