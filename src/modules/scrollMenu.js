const scrollMenu = () => {
  const menuList = document.querySelectorAll('.menu>li>a');

  menuList.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const id = item.getAttribute('href').slice(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    })
  });
};

export default scrollMenu;