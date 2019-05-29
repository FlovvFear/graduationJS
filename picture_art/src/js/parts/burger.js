const burger = () => {
    const log = (msg) => console.log(msg);

    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu'),
        windowSize = document.documentElement.clientWidth,
        burgerActive = false;

    const showMenu = () => {
        if (burgerActive == true) {
            burgerMenu.style.display = 'none';
            burgerActive = false;

        } else {
            burgerMenu.style.display = 'block';
            burgerActive = true;
        }
    };

    burger.addEventListener('click', () => {
        if (windowSize < 992) {
            showMenu();
        }


    window.addEventListener('resize', () => {
        windowSize = document.documentElement.clientWidth;
        if (burgerActive == true && windowSize > 768) {
            showMenu();
        }
        log(windowSize);
        });
        
    });
};

module.exports = burger;