let menu = document.querySelector('.menu__list');
let burger = document.getElementsByClassName('menu__burger-icon')[0];
window.addEventListener('click', function(e){
    let target2 = e.target;
    if ((target2 != document.getElementsByClassName('page')[0])&&(target2.closest('div').classList.contains('menu__burger-icon')) || (target2.classList.contains('menu__burger-icon')))
    {
        menu.classList.toggle('active');

    }});

;
let animItems = document.querySelectorAll("._anim-items");
        if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
    }
function animOnScroll(){
                for (let i=0; i<animItems.length; i++ ){
                const animItem = animItems[i];
                const animItemHeight=animItem.offsetHeight;
                const animItemOffset = animItem.getBoundingClientRect().top + window.pageYOffset;
                const animStart = 4;
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if(animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / 4;
                }
                if ((window.pageYOffset > (animItemOffset - animItemPoint))&&(window.pageYOffset < (animItemOffset + animItemHeight))){
                    if (animItem.classList.contains('_active')){
                        continue;}
                    else{
                        animItem.classList.add('_active');
                        animItem.classList.add('_no-hide');
                    }
                }
                else{
                    if (!animItem.classList.contains('_no-hide')){
                        animItem.classList.remove('_active');}
                }
            }
}
window.addEventListener('click', function(e){
    let target = e.target;
    if (target == document.querySelector('.main-heading_btn'))
    {
        document.querySelector('.main_content.info').scrollIntoView({ behavior: 'smooth'});
        animItems[0].classList.add('_active');
    }
});
;
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
};