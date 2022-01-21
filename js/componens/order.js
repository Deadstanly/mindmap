import{postData} from "../serviсes/postData.js"

function calculateCart() {
    let sum  = document.querySelector('.sum-cart')
    let cart = JSON.parse(localStorage.getItem('cardObj'))
    let result = 0;

    cart?.forEach(item => {
        result += +item.cardPrice;
        sum.innerHTML =`<h2 class="sum-result">Сумма заказа: <span class="num">${result}</span>  ${item.cardсurrency}</h2>`
    })

}

calculateCart();


function checkOut() {
    let sumResult = document.querySelector('.num').textContent;
    let mail = document.querySelector('.email').value;
    let name = document.querySelector('.name').value;
    let surName = document.querySelector('.surname').value

    let dataObj = {
        'sum': sumResult,
        'mail': mail,
        'name': name,
        'surName': surName
    }

    postData('https://mindmap-f5c39-default-rtdb.firebaseio.com/order.json', dataObj);

    alert('Заказ успешно создан !')

    localStorage.clear();

    document.querySelector('.cart').innerHTML = '';

    window.location.reload();

}

document.querySelector('.btn-cart').addEventListener('click', () => {
    checkOut()
})




