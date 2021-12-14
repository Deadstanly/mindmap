import{postData} from '../serviсes/postData.js';
import{environmentsObj} from '../environments.js';
import{localStorageService} from '../serviсes/localStorage.js';

function auth() {
    document.querySelector('.sign_in').addEventListener('click', () => {
        let email = document.querySelector('.email_input')
        let password = document.querySelector('.pass_input')

        let auth_obj = {
            'email': email.value,
            'password': password.value,
            "returnSecureToken": true
        }

       postData(`${environmentsObj.authUrl}${environmentsObj.apiKey}`, auth_obj).then(data => {localStorageService.localSetItem('idToken', data.idToken), checkToken()})
    })
}

function checkToken() {

    if (localStorageService.localGetItem('idToken') && localStorageService.localGetItem('idToken') != 'undefined') {
        document.location.href='http://127.0.0.1:5500/admin.html';
    }
}

checkToken();
auth();

