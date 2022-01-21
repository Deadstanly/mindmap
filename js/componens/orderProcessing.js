import {deleteData} from '../serviсes/deleteData.js'
import {getData} from '../serviсes/getData.js';

function activeOrders() {
    let active = document.querySelector('.active-order')
    getData('https://mindmap-f5c39-default-rtdb.firebaseio.com/order.json').then(data => Object.entries(data)).then(data => data.forEach(item => {
        active.innerHTML +=
        `
        <p class="mail mt-5">${item[1].mail}</p>
        <p class="name">${item[1].name}</p>
        <p class="surname">${item[1].surName}</p>
        <p class="sum">${item[1].sum}</p>
        <button id="${item[0]}" class="btn btn-success btn-order">Заказ выполнен!</button>
        `
    }))

}

function deleteSuccessOrder() {
    deleteData(`https://mindmap-f5c39-default-rtdb.firebaseio.com/order/${item[0]}`)
}

let btns = document.querySelectorAll('.btn-order')
console.log(btns)


activeOrders();


