
'use strict'

function initializeHeader(){
    const mainMenu = document.querySelector('.mainMenu');

    if(mainMenu){
        const navbarHTML =`
        <ul class="mainMenu__container">
            <li class="mainMenu__item mainMenu__item--1">
                <a href="" class="mainMenu__link--1">Home</a>
            </li>
            <li class="mainMenu__item mainMenu__item--2">
                <a href="" class="mainMenu__link--2">Services</a>
            </li>
            <li class="mainMenu__item mainMenu__item--3">
                <a href="" class="mainMenu__link--3">About</a>
            </li>
            <li class="mainMenu__item mainMenu__item--4">
                <a href="" class="mainMenu__link--4">Contact</a>
            </li>
            <li class="mainMenu__item mainMenu__item--5">
                <a href="" class="mainMenu__link--5">Extra</a>
            </li>
    </ul>
        `;

        mainMenu.innerHTML = navbarHTML;
    }

}

window.initializeHeader = initializeHeader;
   
