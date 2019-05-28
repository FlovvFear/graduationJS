const modal = () => {
    let consultation = document.querySelector('.popup-consultation'),
        design = document.querySelector('.popup-design'),
        gift = document.querySelector('.popup-gift'),
        giftBtn = document.querySelector('.fixed-gift'),
        activeModal = false;

    const bindModal = (modalTarget,modalDisplay, overflowStatus, activeStatus) => {
        modalTarget.style.display = modalDisplay;
        document.body.style.overflow = overflowStatus;
        activeModal = activeStatus;
    };

    document.body.addEventListener('click', event => {
        let target = event.target;

        if(target.classList.contains('button-consultation')) bindModal(consultation,'flex', 'hidden', true);
        if(target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) bindModal(consultation, 'none', '', false);

        if(target.classList.contains('button-design')) bindModal(design,'flex', 'hidden', true);
        if(target.classList.contains('popup-close') || target.classList.contains('popup-design')) bindModal(design, 'none', '', false);

        if(target.classList.contains('fixed-gift')) {
            bindModal(gift,'flex', 'hidden', true);
            giftBtn.style.display = 'none';
        }
        if(target.classList.contains('popup-close') || target.classList.contains('popup-gift')) {
            bindModal(gift, 'none', '', false);

        }
    });

    setTimeout(() =>{
        if (activeModal == false) {
            bindModal(gift,'flex', 'hidden', true);
            giftBtn.style.display = 'none';
        } else {
            console.log('не судьба');
        }
    }, 60000);

    // Открытие модалки при прокрутки до конца страницы
    let activeBtn = false;

    document.addEventListener('click', (e) =>{
        if (e.target.tagName == 'BUTTON') activeBtn = true;
    });

    window.addEventListener('scroll',() =>{
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
            windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if (windowScroll == windowHeight && activeBtn == false) {
            bindModal(gift,'flex', 'hidden', true);
            giftBtn.style.display = 'none';
        }
    });


};

module.exports = modal;