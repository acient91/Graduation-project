const sendForm = () => {
  const form = document.querySelector('[name="form-callback"]');
  const formBtn = form.querySelector('.button');
  const statusBlock = document.createElement('span');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо, ждите звонка!';
  const userName = form.querySelector('[name="fio"]');
  const userPhone = form.querySelector('[name="tel"]');

  const validate = () => {
    let success = true;

    userName.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я]+/g, '');
    });

    userPhone.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d\+]/g, '');
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
      alert('Заполните данные')
    }
  };

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if ((userName.value == '' || userName.value == '')) {
      alert('Заполните данные');
    } else {
      submitForm();
    }
  });
  validate();
};

export default sendForm;