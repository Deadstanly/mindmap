import { getData } from "../serviсes/getData.js";

function renderingComments() {
    getData('https://mindmap-f5c39-default-rtdb.firebaseio.com/commets.json').then(data => Object.values(data)).then(data => data.forEach(item => {

        if(item.rating < 3) {
            document.querySelector('.bad_comments').innerHTML +=
            `<div class="comment_block">
                <p class="theme_cooment mt-3">${item.cardName}</p>
                <h4 class="nick_name">${item.nameUser}</h4>
                <p class="stars">${item.stars}</p>
                <p class="comment"><i>${item.textComment}</i></p>
            </div>`
        } else {
            document.querySelector('.good_comments').innerHTML +=
            `<div class="comment_block">
                <p class="theme_cooment mt-3">${item.cardName}</p>
                <h4 class="nick_name">${item.nameUser}</h4>
                <p class="stars">${item.stars}</p>
                <p class="comment"><i>${item.textComment}</i></p>
            </div>`
        }
    }))
}



export{renderingComments};