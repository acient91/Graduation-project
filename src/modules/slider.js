const slider = () => {
  const itemSlider = document.querySelectorAll('.item');
  let current = 0;

  setInterval(() => {
    itemSlider[current].classList.remove('item-active');
    current++

    if (current >= itemSlider.length) {
      current = 0;
    }
    itemSlider[current].classList.add('item-active');
  }, 3000);
};

export default slider;