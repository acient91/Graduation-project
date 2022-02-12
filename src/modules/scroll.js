const scroll = () => {
  const upBtn = document.querySelector('.up');

  window.onscroll = () => {
    if (window.scrollY >= 620) {
      upBtn.style.display = 'block';
    } else {
      upBtn.style.display = 'none';
    }
  }

  upBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  })

};

export default scroll