
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitFormEl);

function onSubmitFormEl(event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked');

    const value = state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(delay) > 0 && value === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  event.currentTarget.reset();
}
