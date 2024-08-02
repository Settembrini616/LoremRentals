
'use strict'

function initializeHeader(){
    const mainMenu = document.querySelector('.mainMenu');

    if(mainMenu){
        const navbarHTML =`
        <div class="nav">
        <div class="nav__left">
        <div class="nav__left--wrapper">

        <img src="/Assets/img/LoremLogo.png" 
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
            <ul class="nav__right--bottom-list">
                <li class="nav__right--bottom-item_1">ABC</li>
                <li class="nav__right--bottom-item_2">DEF</li>
                <li class="nav__right--bottom-item_3">GHI</li>
                <li class="nav__right--bottom-item_4">JKL</li>
            </ul>
        </div>
            </div>
        </div>
        `;

        mainMenu.innerHTML = navbarHTML;
    }

}

window.initializeHeader = initializeHeader;
   
