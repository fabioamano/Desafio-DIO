const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document. getElementByld('change-cat');

const getCats = async () => {
        const data = await fetch(BASE_URL)
        .then(res => res.json())
        .catch(e => console.log(e))
    
        return data.weburl;
    };


const loading = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn. addEventListener('click', loading);

loading();


/* //promises:obj de processamento assíncrono
//estados: pending, fulfilled e rejected */

//async/await: funçoes assincronas precisam dessas palavras-chave

/* //APIs: intermedia os resultados do back-end com aqueles do front-end
JSON: muitas vezes, os resultados vem nesse formato */

//fetch: usado para consumir APIs, retorna uma promisse

