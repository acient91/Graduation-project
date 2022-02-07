const modal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const callbackModal = document.getElementById('callback');
  const modalClose = document.querySelector('[alt="modal-close"]');
  const body = document.querySelector('body');

  let count = 0;
  let idInterval;

  const animate = () => {
    count++
    idInterval = requestAnimationFrame(animate);

    if (count < 60) {
      callbackModal.style.top = count + 'px';
    } else {
      cancelAnimationFrame(idInterval);
      count = 0;
    };
  };

  body.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('callback-btn')) {
      callbackModal.style.display = 'flex';
      modalOverlay.style.display = 'block';
      animate();
    } else if (e.target.classList.contains('modal-overlay')) {
      callbackModal.style.display = 'none';
      modalOverlay.style.display = 'none';
    } else if (e.target == modalClose) {
      callbackModal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  });
};

export default modal