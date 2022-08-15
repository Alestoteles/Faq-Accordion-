
function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion .questions');
accordionList[0].classList.add('questions-active')
accordionList[0].nextElementSibling.classList.add('answers-active')

function activeAccordion() { 

this.classList.toggle('questions-active');
this.nextElementSibling.classList.toggle('answers-active');
}

accordionList.forEach((item)=> { 
    item.addEventListener('click' , activeAccordion );
})
}

initAccordion()