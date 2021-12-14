import{postData} from '../serviсes/postData.js';

function createComment() {

    document.querySelector('.send').addEventListener('click', () => {

        let cardName = document.querySelector('.card_name')
        let nameUser = document.querySelector('.name_user');
        let stars = document.querySelector('.stars');
        let textComment = document.querySelector('.text_comment');

        let obj = {
            'cardName': cardName.value,
            'nameUser': nameUser.value,
            'stars': createStars(stars.value),
            'textComment': textComment.value,
            'rating': stars.value
        }

        postData('https://mindmap-f5c39-default-rtdb.firebaseio.com/commets.json', obj);

        alert('Отзыв отправлен!');

        cardName.value = '';
        nameUser.value = '';
        stars.value = '';
        textComment.value = '';

    })
}

function createStars(starsCount) {
    let str = '';

    for(let i = 0; i < starsCount; i++) {
        str += `<i class="fas fa-star"></i>`
    }
    return str;
}

createComment()
