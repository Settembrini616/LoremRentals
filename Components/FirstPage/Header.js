'use strict';

// Инициализация хедера и добавление попапов
function initializeHeader() {
    const mainMenu = document.querySelector('.mainMenu');

    if (mainMenu) {
        const navbarHTML = `
        <div class="nav">
       
        <div class="shrink__wrap">
        <button class="shrink__search">
        <span class="material-symbols-outlined custom-search">
        search
        </span>
  

         </button>
         <button class="shrink__menu" id="menu-toggle">
         <span class="shrink__inside">&nbsp;</span>
          </button>
            </div>

          
        <div class="nav__left"> 
                <div class="nav__left--wrapper">
                    <img src="/Assets/img/newlogo.png" 
                    alt="logo image" 
                    class="nav__left--wrapper-img">
    
                    <p class="nav__left--wrapper-bigText">
                        Lorem Rentals Inc
                    </p>

                    <p class="nav__left--wrapper-smallText">
                        Groups
                    </p>
                </div>
            </div>
    
            <div class="nav__right"> 
                <div class="nav__right--top">
                    <div>&nbsp;</div>
                    <ul class="nav__right--top-content">
                        <li class="nav__right--top-content_promo">
                            <div class="svg__wrap">
                                <svg>
                                    <use xlink:href="/Assets/img/symbol-defs.svg#icon-colours"></use>
                                </svg>
                            </div>
    
                            <span class="green-text">
                                Promotions
                            </span>
                        </li>
    
                        <li class="nav__right--top-content_socialMedia">
                            <svg class="social__facebook">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-facebook"></use>
                            </svg>
                            <svg class="social__instagram">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-instagram"></use>
                            </svg>
                            <svg class="social__twitter">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-twitter"></use>
                            </svg>
                            <svg class="social__linkedin2">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-linkedin2"></use>
                            </svg>
                            <svg class="social__tiktok">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-tiktok"></use>
                            </svg>
                        </li>
                        <li class="nav__right--top-content_phone">+1 (519) 200-8736</li>
                        <li class="nav__right--top-content_search">
                            <svg class="social__search">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-search"></use>
                            </svg>
                        </li>
                    </ul>
                </div>
    
                <div class="nav__right--bottom">
                    <ul class="ul nav__right-list">
                        <li class="nav__right--item-1">
                            Apartments in Khrushevkas   
                            <svg class="item--arrow">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-caret-down"></use>
                            </svg>
                            <div class="popup popup--1 hide">ABC</div>
                        </li>
    
                        <li class="nav__right--item-2">Commercial</li>
                        <li class="nav__right--item-3">About Us
                            <svg class="item--arrow">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-caret-down"></use>
                            </svg>
                            <div class="popup popup--2 hide">CDE</div>
                        </li>
                        <li class="nav__right--item-4">Contact Us
                            <svg class="item--arrow">
                                <use xlink:href="/Assets/img/symbol-defs.svg#icon-caret-down"></use>
                            </svg>
                            <div class="popup popup--3 hide">EFJ</div>
                        </li>
                    </ul>
                </div>
            </div>
    
            
        </div>
        `;

        mainMenu.innerHTML = navbarHTML;

        addPopUp(); // Запуск функции для добавления попапов
        document.getElementById('menu-toggle').addEventListener('click', function(){
            this.classList.toggle('menu-open');
        })
    }
}

// Функция для добавления обработчиков событий на элементы
function addPopUp() {
    const navItems = document.querySelectorAll('.nav__right-list li');
    

    navItems.forEach(item => {
        const popup = item.querySelector('.popup');
        if (popup) {
            const showPopup = () => {
                
                popup.style.display = 'block';
                popup.style.opacity = '1';
                popup.style.animation = 'popupAnimation 0.3s linear forwards';
            };

            const hidePopup = () => {
               
                    popup.style.opacity = '0';
                  
                        popup.style.display = 'none';
                        popup.style.animation = 'none';
                   
         // Задержка перед началом скрытия
            };

            item.addEventListener('mouseenter', showPopup);
            item.addEventListener('mouseleave', hidePopup);
            popup.addEventListener('mouseenter', showPopup);
            popup.addEventListener('mouseleave', hidePopup);
        }
    });
}

// Запуск функции инициализации при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeHeader);
