
function iniciarPagina() {
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    const burgerButton = document.getElementById('burger');
    const hero_2 = document.getElementById('hero_2');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars-staggered'
    }

    burgerButton.onclick = function () {
        hero_2.classList.toggle('open')
        const isOpen = hero_2.classList.contains('open')
    }

    /* burgerButton.addEventListener('click', function () {
        hero_2.style.display = 'flex';
    }) */
}


window.addEventListener("load", iniciarPagina())

/* document.addEventListener('DOMContentLoaded', function () {
    // Espera a que se cargue el DOM
}); */