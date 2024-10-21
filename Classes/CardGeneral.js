'use strict'

 class CardGeneral {
    constructor(className, width, height)
    {
        this.className = className;
        this.width = width;
        this.height = height;
    
    }

    createCard(){
        
        const card = document.createElement('div');
        card.className = this.className;
        card.style.width = this.width + 'rem';
        card.style.height = this.height + 'rem';
    
        document.body.appendChild(card);
    
        return card;

    }


}


class SecondFieldCard extends CardGeneral{
    constructor(className, width, height, htmlContentInit, newHtmlContentHover)
    {
        super(className, width, height, htmlContentInit);
        this.newHtmlContentHover = newHtmlContentHover;

    }

    changeHtmlOnHover()
    {
        const card = document.querySelector(`.${this.className}`);

        if(card){
        
            card.addEventListener('mouseenter', ()=>{
                card.innerHTML = this.newHtmlContentHover;
            });

            card.addEventListener('mouseleave', ()=>{
                card.innerHTML = this.htmlContentInit;
            })

        }
    }





}
 