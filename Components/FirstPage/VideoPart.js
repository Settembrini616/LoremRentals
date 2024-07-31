'use strict'

function initializeVideoPart(){
    const videoSection = document.querySelector('.heroVideo');

    if(videoSection){

        const videoHTML =`
        <video autoplay muted loop class="heroVideo__inner">
        <source 
        src="./Assets/videos/vecteezy_view-from-the-height-of-the-residential-area-near-the-river_39227544.mp4"
         type="video/mp4">
        </video>
        `;

        videoSection.innerHTML = videoHTML;
    }

}

widndow.initializeVideoPart = initializeVideoPart;