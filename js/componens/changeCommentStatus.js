function changeStatus() {
    document.querySelector('.bad_comment').addEventListener('click', () => {
        document.querySelector('.bad_comments').classList.remove('hide');
        document.querySelector('.good_comments').classList.add('hide');
        document.querySelector('.bad_comment').classList.add('active');
        document.querySelector('.good_comment').classList.remove('active');
    })

    document.querySelector('.good_comment').addEventListener('click', () => {
        document.querySelector('.good_comments').classList.remove('hide');
        document.querySelector('.bad_comments').classList.add('hide');
        document.querySelector('.good_comment').classList.add('active');
        document.querySelector('.bad_comment').classList.remove('active');
    })
}

export{changeStatus};

