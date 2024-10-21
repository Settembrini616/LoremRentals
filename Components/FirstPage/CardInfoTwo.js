///IMPORTED CardGeneral from '/Classes/CardGeneral.js';

'use strict'



function initializeCardInfo() {
    const cardInfoTwo = document.querySelector('.cardInfoTwo');

    if (cardInfoTwo) { 

        const cardTemplate = new CardGeneral('card-info',40,40);
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



// const addCards = ( cardInstance, count) =>{

//     let cardsHtml = ``;
//     for(let i=0; i<count; i++){
//         const card = cardInstance.createCard();
//         cardsHtml += card.outerHTML;
//     }
//     return cardsHtml;
// }

// const createInnerHtmls = (cardCount) =>
// {
//     function createListOfInitialHtml(){

//         const arrInitialHtml = [];
//         for(let i=1; i<=cardCount; i++){

//             const initialHtmlSecondSection = `
//             <img src="" alt="" class="inner-box__image-${i}">
//             <h2 class="inner-box__title-${i}"></h2>`;
//             arrInitialHtml.push(initialHtmlSecondSection);
//         }

//         return arrInitialHtml;
//     }

//     function createListOfHoverHtml(){

//         const arrHoverHtml = [];

//           for(let i=0; i<=cardCount; i++){
//             const HoverHtmlSecondSection = `
//               <img src="" alt="" class="inner-box__image-${i}">
//                 <h2 class="inner-box__title-${i}"></h2>
//                 <p class="inner-box__text-${i}"></p>`;

//             arrHoverHtml.push(HoverHtmlSecondSection);
//         }

//         return arrHoverHtml;
//     }

//     return {
//         initialHtml: createListOfInitialHtml(),
//         hoverHtml: createListOfHoverHtml()
//     }
// }











