const reveal = () => {
    const newBackground = document.querySelector('.start');
    newBackground.style.opacity= "0";
    setTimeout(() => {newBackground.style.display= "none";},900);
    const body = document.querySelector('body');
    body.style.overflowY= "scroll";
}
const menu_btn = document.querySelector(".btn");
const menu = document.querySelector('.social-menu')
const close_menu = document.querySelector('.close')
menu_btn.addEventListener('click',function() {
  menu.classList.add('is-active')
});
close_menu.addEventListener('click' ,function(){
  menu.classList.remove('is-active')
})