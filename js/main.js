document.onclick = (e) => {
  let target = e.target;
  let menu = document.querySelector('.header__items-full-screen');
  if (target.closest('.header__items-small-screen')) {
    menu.classList.toggle('active');
  }
};
