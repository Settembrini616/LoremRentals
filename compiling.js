'use strict'

const scripts = [
    './Components/FirstPage/Header.js',
    '/Components/FirstPage/VideoPart.js',
]


function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;

        script.onload = () => resolve(src);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.body.appendChild(script);
    });
}

function loadScripts(scripts) {
    return Promise.all(scripts.map(loadScript));
}

document.addEventListener('DOMContentLoaded', () => {
    loadScripts(scripts)
        .then(() => {
            console.log('All scripts are loaded');
            // Вызов всех функций инициализации компонентов
            if (typeof initializeHeader === 'function') initializeHeader();
            if (typeof initializeVideoPart === 'function') initializeVideoPart();
        })
        .catch(err => console.error(err));
});





// function loadScripts(scripts, callback){
  
//     let loadedScripts = 0;

//     scripts.forEach(scriptSrc =>{
        
//         const script = document.createElement('script');
//         script.src = scriptSrc;
//         script.async = false;


//         script.onload = ()=>{
            
//             loadedScripts++;
//             if(loadedScripts === scripts.length && callback){
//                 callback();
//             }
//         };

//         document.body.appendChild(script);
//     });
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//     loadScripts(scripts, ()=>{
//         console.log('All scripts are loaded')
//     })
// })

