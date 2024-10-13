'use strict'

export class CardGeneral {
    constructor(className, width, height, border='2px solid black'

    ){
        this.className = className;
        this.width = width;
        this.height = height;
        this.border = border;
    }

    createCard(){
        
        const card = document.createElement('div');
        card.className = this.className;
        card.style.width = this.width + 'rem';
        card.style.height = this.height + 'rem';
        card.style.border = this.border;

        return card;

    }

    populateHtml(htmlContent){
        const existingCard = document.querySelector(`.${this.className}`);

        if(existingCard)
        {
            existingCard.innerHTML = htmlContent;
        }
    }

}