'use script';

let modal = document.querySelector('.modal');
let trigger = document.querySelector('.trigger');
let closeButton = document.querySelector('.close-button');
(function clickBtnHandler(){
    const buttons = document.querySelectorAll('.button');
    for (let i=0; i< buttons.length; i++){
        buttons[i].addEventListener('click', toggleModal)
    }
})();


function toggleModal() {
    modal.classList.toggle("show-modal");
};

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
};

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);











