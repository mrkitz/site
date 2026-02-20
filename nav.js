const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav-link');

// Get current page filename
let path = window.location.pathname;
let page = path.substring(path.lastIndexOf('/') + 1);

// Default to index.html
if (page === "") {
  page = "index.html";
}

links.forEach(link => {
  const href = link.getAttribute('href');

  if (href === page) {
    link.classList.add('active');
  }
});

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');

  if (sidebar.classList.contains('open')) {
  sidebar.scrollIntoView({ behavior: 'smooth' });
}
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});

// Close when clicking a TOC link
document.querySelectorAll('#toc a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
});

