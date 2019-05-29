const accordion = () => {
    const log = msg => console.log(msg);
    let accordionTabs = document.querySelectorAll('.accordion-heading'),
        accordion = document.querySelector('.often-questions'),
        accordionContents = document.querySelectorAll('.accordion-block'),
        accordionSpan = accordion.querySelectorAll('span');



    const hideContent = (a) => {
        for (let i = a; i < accordionContents.length; i++) {
            // let h = 0,
            //     pt = 0,
            //     pb = 0,
            //     mt = 0;

            // accordionContents[i].style.overflow = 'hidden';

            // const slideDown = setInterval(() =>{
            //     if (accordionContents[i].clientHeight - h > 0) {
            //         h += 2;
            //         accordionContents[i].style.height = Math.round(accordionContents[i].clientHeight - h) + 'px';
            //     } 
            //     else if (pt < 3) {
            //         pt += 0.1;
            //         accordionContents[i].style.padding = (3 - pt).toFixed + 'rem';
            //     } else if (pb < 3) {
            //         pb += 0.1;
            //         accordionContents[i].style.paddingBottom = (3 - pb).toFixed + 'rem'; 
            //     } else if (mt < 6) {
            //         mt += 0.2;
            //         accordionContents[i].style.marginTop = (6 - mt).toFixed + 'rem'; 
            //     }

            // }, 3);
            accordionContents[i].style.display = 'none';
            accordionContents[i].classList.add('animated', 'pulse');
            accordionTabs[i].classList.remove('ui-accordion-header-active');  





          
		}
    };
    hideContent(0);

    const showContent = (b) => {
        // let h = 0,
        //     pt = 0,
        //     pb = 0,
        //     mt = 0;

        // const slideUp = setInterval(() =>{
        //     if (accordionContents[b].clientHeight > h) {
        //         h += 2;
        //         accordionContents[b].style.height = h + 'px';
        //     } 
        //     else if (pt < 3) {
        //         pt += 0.1;
        //         accordionContents[b].style.padding = pt + 'rem';
        //         console.log(pt);
        //     } else if (pb < 3) {
        //         pb += 0.1;
        //         accordionContents[b].style.paddingBottom = pb + 'rem'; 
        //         console.log(pb);
        //     } else if (mt < 6) {
        //         mt += 0.2;
        //         accordionContents[b].style.marginTop = mt + 'rem'; 
        //         console.log(mt);
        //     }
        // }, 3);

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
                if (accordionContents[i].style.dislay == 'block' && (target == accordionTabs[i] || target == accordionSpan[i])) {
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