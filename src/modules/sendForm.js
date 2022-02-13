const sendForm = () => {
  const form = document.querySelector('[name="form-callback"]');
  const formBtn = form.querySelector('.button');
  const statusBlock = document.createElement('span');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо, ждите звонка!';

  const validate = () => {
    let success = true;
    const userName = form.querySelector('[name="fio"]');
    const userPhone = form.querySelector('[name="tel"]');

    userName.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я]/g, '');
      console.log(e.target.value);
    });

    userPhone.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d\+]/g, '');
      console.log(e.target.value);
    });
    return success;
  };

  const sendData = (data) => {

    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            input.value = '';
          })
          setTimeout(() => statusBlock.remove(), 3000);
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        })
    } else {
      alert('Данные не валидны!')
    }
  };

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
    submitForm();
  });
};

export default sendForm;