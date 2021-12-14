import{localStorageService} from '../serviсes/localStorage.js'

function exitAuth() {
    document.querySelector('.enter').addEventListener('click', () => {
        localStorageService.localRemoveItem('idToken');
    })
}

exitAuth();
