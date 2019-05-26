const accordion = () => {
    const log = msg => console.log(msg);
    let accordionTabs = document.querySelectorAll('.accordion-heading'),
        accordion = document.querySelector('.often-questions'),
        accordionContents = document.querySelectorAll('.accordion-block'),
        accordionSpan = accordion.querySelectorAll('span');

    log(accordionTabs);
    log(accordionContents);
    log(accordionSpan);

    const hideContent = (a) => {
        for (let i = a; i < accordionContents.length; i++) {
            accordionContents[i].style.display = 'none';
            accordionTabs[i].classList.remove('ui-accordion-header-active');            
		}
    };
    hideContent(0);

    const showContent = (b) => {
		if (accordionContents[b].style.display == 'none') {
            accordionContents[b].style.display = 'block';
            accordionTabs[b].classList.add('ui-accordion-header-active');            
		}
    };
    


    accordion.addEventListener('click', event => {
        let target = event.target;
        log(target);
        if (target && target.classList.contains('accordion-heading') || target.tagName == 'SPAN') {
            for (let i = 0; i < accordionTabs.length; i++) {
                if (accordionContents[i].style.display == 'block' && (target == accordionTabs[i] || target == accordionSpan[i])) {
                    hideContent(0);
                    break;
                } 
                if (target == accordionTabs[i] || target == accordionSpan[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });

    

    
};

module.exports = accordion;