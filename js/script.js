const openModal = document.querySelector('#abrir-modal');
const closeModal = document.querySelector('#fechar-modal');
const modal = document.querySelector('.modal-bg');
const scroll = document.querySelector('#scroll');
const scrollBody = document.body

openModal.addEventListener('click', () => {
  modal.classList.add('modal-active');
  document.documentElement.style.overflow = 'hidden';
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-active');
  document.documentElement.style.overflow = 'auto';
})

scroll.addEventListener("wheel", event => {
  if (event.deltaY > 0) {
    event.target.scrollBy(100, 0);
  } else {
    event.target.scrollBy(-100, 0);
  }
});
