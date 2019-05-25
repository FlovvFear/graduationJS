const tabs = () => {
    let tabBlock = document.querySelector('.portfolio-menu'),
        tabs = document.querySelectorAll('.portfolio-menu > li'),
        tabContent = document.querySelectorAll('.portfolio-block'),
        noContent = document.querySelector('.portfolio-no');



    tabBlock.addEventListener('click', event => {
        tabs.forEach((item) => {
            item.classList.remove('active');
        });
        let target = event.target,
            targetClass = target.getAttribute('class'),
            empty = true;
        target.classList.add('active');
        if (target && target.tagName == 'LI') {
            for (let i = 0; i < tabContent.length; i++) {
                if (tabContent[i].classList.contains(targetClass)) {
                    tabContent[i].style.display  = 'block';
                    empty = false;
                } else tabContent[i].style.display = 'none';

            }
            if (!empty) noContent.style.display = 'none';

            if (empty) noContent.style.display = 'block';
        }
    });
};

module.exports = tabs;