const botaoMenu = document.querySelector('.menu-mobile')
const menuLateral = document.querySelector('.mobile-navbar')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('mobile-navbar--ative')
})

