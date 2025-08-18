const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//клик по кнопкам с подсказками
for (let btn of infoBtns) {
    btn.addEventListener('click', function (event) {
        event.stopPropagation();
        //hide all hints
        for (let hint of infoHints) {
            hint.classList.add('none');
        }
        //show current hint
        this.parentNode.querySelector('.info-hint').classList.toggle('none')
    });
}

//закрываем подсказки при клике по всему документу
document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
});

//запрещаем всплытие событие клика при клике на подсказки
for (let hint of infoHints) {
    hint.addEventListener('click', (event) => event.stopPropagation());
}

//swiper slider
const swiper = new Swiper('.swiper', {
    // direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 42,
    freeMode: true,
    navigation: {
        nextEl: '#slider-next',
        prevEl: '#slider-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    //     1440: {
    //         slidesPerView: 4,
    //         spaceBetween: 42,
    //     },
    },
});

//tabs products
const tabBtns = document.querySelectorAll('[data-tab]');
const tabProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabBtns) {
    btn.addEventListener('click', function () {
        //убираем активные классы у всех кнопок
        for (let btn of tabBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }
        //добавляем активный класс к текущей кнопке
        this.classList.add('tab-controls__btn--active');

        //    отобразить нужные товары и скрыть ненужные
        for (let product of tabProducts) {
            // проверка на отображение всех слайдов
            if (this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }
            }
        }
        //апдейт слайдера
        swiper.update();
    });
}

//mobile nav
const mobileNavOpen = document.querySelector('#open-mobile-nav-btn');
const mobileNavClose = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpen.onclick = function () {
    mobileNav.classList.add('mobile-nav-wrapper--open');
};

mobileNavClose.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
};




