const accordion = () => {
  const accordionItem = document.querySelectorAll('.accordeon-item');
  const accordeonContent = document.querySelectorAll('.accordeon-content');

  accordionItem.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('accordeon-item--active')) {
        this.classList.remove('accordeon-item--active');
        accordeonContent[i].style.display = 'none';
      } else {
        accordionItem.forEach((item, i) => {
          item.classList.remove('accordeon-item--active');
          accordeonContent[i].style.display = 'none';
        });
        this.classList.add('accordeon-item--active');
        accordeonContent[i].style.display = 'block';
      }
    });
  });


};
export default accordion