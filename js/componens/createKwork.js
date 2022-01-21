import {postData} from '../serviсes/postData.js';


document.querySelector('.admin_submit').addEventListener('click', (event) => {
    createKwork(event);
})


function createKwork(e) {
    e.preventDefault();

    let inputNameCard = document.querySelector('.card_name');
    let urlAdress = document.querySelector('.url_adress');
    let price = document.querySelector('.price');
    let сurrency = document.querySelector('.card_сurrency');

    let createObj = {
        'cardName': inputNameCard.value,
        'url': urlAdress.value,
        'price': price.value,
        'сurrency': сurrency.value
    }

    postData('https://mindmap-f5c39-default-rtdb.firebaseio.com/kworks.json', createObj);
    alert('Отправлено!')

    clearForm();
}

function clearForm() {
    document.querySelector('.card_name').value = '';
    document.querySelector('.url_adress').value = '';
    document.querySelector('.price').value = '';
    document.querySelector('.card_сurrency').value = '';
}




