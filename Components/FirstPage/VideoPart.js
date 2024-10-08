'use strict'

function initializeVideoPart(){
    const videoSection = document.querySelector('.heroVideo');

    if(videoSection){

        const videoHTML =`
 
       

       
 <div class="hero">

    <div class="hero__topwrap">
        <div class="largetext"> LOREM RENTALS GROUP</div>
        <div class="smalltext">
        <span>Rent.</span> <span>Rave.</span> <span>Refurbish.</span></div>
    </div>

    
    <div class="hero__bottomwrap">
        <div class="search__container bottom-group">
            <span class="material-symbols-outlined custom-search">
                search
            </span>
            <input type="search" class="custom-search--input" name="search"
            placeholder="Start Your Journey Here...">
        </div>

        <div class="selection__area bottom-group">
            <label for="dropdown-one">Dropdown 1</label>
            <select class="dropdown dropdown__left" id="dropdown-one" name="options-one">
            <option value="" disabled selected class="optiontext optiontext-one">select a city</option>     
            <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>

            <label for="dropdown-two">Dropdown 2</label>
            <select class="dropdown dropdown__right" id="dropdown-two" name="options-two">
            <option value="" disabled selected class="optiontext optiontext-two ">rent range</option>    
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>
        </div>
        
        <button class="btn green bottom-group">
            Search 
        </button>
       
    </div> 
</div>

<video autoplay muted loop class="video__inner">
<source 
src="./Assets/videos/vecteezy_view-from-the-height-of-the-residential-area-near-the-river_39227544.mp4"
 type="video/mp4">
</video>

        `;

        videoSection.innerHTML = videoHTML;
    }

}

widndow.initializeVideoPart = initializeVideoPart;

