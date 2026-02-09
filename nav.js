const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');

  if (sidebar.classList.contains('open')) {
    sidebar.scrollIntoView({behavior: 'smooth' });
  }

document.querySelectorAll('#toc a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});
});
