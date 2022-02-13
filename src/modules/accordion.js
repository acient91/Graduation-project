const accordion = () => {
  const accordionItem = document.querySelectorAll('.accordeon-item');

  const active = document.getElementsByClassName('accordeon-item--active');
  console.log(accordionItem);
  console.log(active);

  accordionItem.forEach((item, i, accordionItem) => {
    item.addEventListener('click', () => {
      if (active.length > 0 && active[0] !== this) {
        active[0].classList.remove('accordeon-item--active');

      } else {
        this.classList.toggle('accordeon-item--active')
      }
    })
  })


  const accordeonContent = document.querySelectorAll('.accordeon-content');



  // accordionItem.forEach((item) => {
  //   item.addEventListener('click', () => {

  //     if (item.classList.toggle('accordeon-item--active')) {
  //       accordeonContent.forEach((accordeonContentItem) => {
  //         accordeonContentItem.style.display = 'block';
  //       })
  //     }


  //   })
  // })
};

export default accordion