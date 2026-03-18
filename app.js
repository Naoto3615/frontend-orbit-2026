document.querySelector('#year').textContent = String(new Date().getFullYear());

const hero = document.querySelector('.hero');
if (hero) {
  hero.animate(
    [
      { opacity: 0, transform: 'translateY(24px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    { duration: 650, easing: 'ease-out', fill: 'forwards' },
  );
}
