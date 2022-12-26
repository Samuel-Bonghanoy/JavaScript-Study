'use strict';

const modal = document.querySelector('.modal');

const mdal = document.querySelector('.mdal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden'); //no need for dot in classlist
    overlay.classList.remove('hidden');

    modal.style.display = 'block';
  });
}

btnCloseModal.addEventListener('click', function () {
  console.log('Button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  console.log('Button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      mdal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
