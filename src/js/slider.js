let slyder = document.querySelector('.slider-text');
classAdder(slyder, 1);

function classAdder(elem, i) {
    elem.querySelector('.text1:nth-child(2)').addEventListener("click", () => {
        document.querySelector(".main_content .info-block:nth-child(1) .text-container__number").scrollIntoView({ behavior: 'smooth' });
    })
    elem.querySelector('.text1:nth-child(3)').addEventListener("click", () => {
        document.querySelector(".main_content .info-block:nth-child(2) .text-container__number").scrollIntoView({ behavior: 'smooth' });
    })
    elem.querySelector('.text1:nth-child(4)').addEventListener("click", () => {
        document.querySelector(".main_content .info-block:nth-child(3) .text-container__number").scrollIntoView({ behavior: 'smooth' });
    })
}