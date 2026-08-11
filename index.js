const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('.menu-options')
menuBtn.addEventListener('click', () => {
    const menuIsOpen = !menu.hidden;
    menu.hidden =  menuIsOpen;
    console.log(menuIsOpen);
    menuBtn.src = menu.hidden ? 'images/icon-hamburger.svg':'images/icon-close.svg'
    menuBtn.setAttribute('aria-expanded' , String(!menu.hidden));
})