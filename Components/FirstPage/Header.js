
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
                <li class="nav__right--top-content_promo">promo</li>
                <li class="nav__right--top-content_socialMedia">social</li>
                <li class="nav__right--top-content_phone">+1(519)200-8736</li>
                <li class="nav__right--top-content_search">Search</li>
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
   
