const botaoMenu = document.querySelector('.botao__menu')
const menuMobile = document.querySelector('.cabecalho__menu--mobile')
let isMenuOpen = false // Menu esta aberto?
// se false -> fechado,  se true -> aberto

botaoMenu.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel')

    isMenuOpen ? botaoMenu.children[0].setAttribute('src', '../assets/icon-menu.svg') : botaoMenu.children[0].setAttribute('src', '../assets/icon-close.svg')
    
    
    isMenuOpen = !isMenuOpen
})