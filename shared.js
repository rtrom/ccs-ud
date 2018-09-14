const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButton = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

function closeModal() {
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
}

selectPlanButton.forEach((button) => {
  button.addEventListener('click', () => {
    backdrop.classList.add('open');
    modal.classList.add('open');
  });
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
