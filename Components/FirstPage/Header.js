
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
            SOMETHING
            </div>
         </div>
        `;

        mainMenu.innerHTML = navbarHTML;
    }

}

window.initializeHeader = initializeHeader;
   
