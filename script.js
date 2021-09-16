


window.addEventListener('DOMContentLoaded', () => {


    //  TABS

    const tabs = document.querySelectorAll('.tab__item'),
          tabsContent = document.querySelectorAll('.tab__content'),
          tabsParent = document.querySelector('.tab__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tab__item-active');
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tab__item-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tab__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //  Price

    // const prices = document.querySelectorAll('.pricing__item'),
    //       overlay = document.querySelectorAll('.overlay'),
    //       Content = document.querySelectorAll('.tab__content'),
    //       pricesParent = document.querySelectorall('.pricing__items'),
    //       basic = ducument.querySelector('.pricing__basic');


    // pricesParent.addEventListener('mouseover', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('pricing__item')) {
    //         prices.forEach((item, i) => {
    //             if (target == item) {
    //                 console.log('look');
    //             } 
    //         });
    //     }
    // });

    // pricesParent.addEventListener('mouseover', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('pricing__basic')) {
    //         basic.forEach((item, i) => {
    //             if (target == item) {
    //                 console.log('look');
    //             } 
    //         });
    //     }
    // });



    //  Timer

    const deadline = '2022-10-25';

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


});



//  Time: 