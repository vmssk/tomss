window.addEventListener('DOMContentLoaded', function () {


    //menu-burger
    const menuIcon = document.querySelector('.menu__icon'),
        nav = document.querySelector('.nav');

    menuIcon.addEventListener('click', function () {
        document.body.classList.toggle('lock');
        menuIcon.classList.toggle('_active-icon');
        nav.classList.toggle('_active');
    });


    //scrolls
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            if (menuIcon.classList.contains('_active-icon')) {
                document.body.classList.remove('lock');
                menuIcon.classList.remove('_active-icon');
                nav.classList.remove('_active');
            }

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    //scroll-elements
    const aniItems = document.querySelectorAll('.scroll-element');

    window.addEventListener('scroll' , animation);
    function animation () {
        for (let index = 0; index < aniItems.length; index++) {
            const aniItem = aniItems[index];
            const aniItemHeight = aniItem.offsetHeight;
            const aniItemOffset = offset(aniItem).top;
            const aniStart = 4;

            let aniItemPoint = window.innerHeight - aniItemHeight / aniStart;

            if(aniItemHeight > window.innerHeight) {
                aniItemPoint = window.innerHeight - window.innerHeight / aniStart;
            }

            if((pageYOffset > aniItemOffset - aniItemPoint) && pageYOffset < (aniItemOffset + aniItemHeight)){
                aniItem.classList.add('_active');
            } else {
                aniItem.classList.remove('_active');
            }
            
        }
    }

        function offset (el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() => {
            animation();
        }, 300);

});
