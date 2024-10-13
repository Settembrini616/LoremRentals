

function initializeCardInfo() {
    const cardInfoTwo = document.querySelector('.cardInfoTwo');

    if (cardInfoTwo) {

        const cardTemplate = new CardGeneral('card-info',50,40);
        const cardsMarkup = addCards(cardTemplate, 3);

        const cardInfoContent = `
       <div class="partTwoTop">
     
        ${cardsMarkup}
    
        </div>
        <div class="partTwoBottom">
            World
        </div>
        `;

        cardInfoTwo.innerHTML = cardInfoContent;

    }
}

document.addEventListener('DOMContentLoaded', initializeCardInfo);



// const arrayOfCards = [
//     new CardGeneral('card', 8, 8),
//     new CardGeneral('card', 8, 8),
//     new CardGeneral('card', 8, 8)
// ]

class CardGeneral {
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

const addCards = ( cardInstance, count) =>{

    let cardsHtml = ``;
    for(let i=0; i<count; i++){
        const card = cardInstance.createCard();
        cardsHtml += card.outerHTML;
    }
    return cardsHtml;

}













