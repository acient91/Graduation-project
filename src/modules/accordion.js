const accordion = () => {
  const accordionItem = document.querySelectorAll('.accordeon-item');
  const accordeonContent = document.querySelectorAll('.accordeon-content');

  accordionItem.forEach((item, i, parent) => {

    item.addEventListener('click', () => {

      if (item.classList.contains('accordeon-item--active')) {
        accordeonContent[i].style.display = 'none';
        item.classList.remove('accordeon-item--active');
      } else {
        item.classList.add('accordeon-item--active');
        accordeonContent[i].style.display = 'block';
      };

    });
  });


};
export default accordion