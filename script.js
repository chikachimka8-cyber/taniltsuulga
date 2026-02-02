// Simple interactions: handle form and theme toggle
const form = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('message').value.trim();
  if (!msg) return alert('Мессеж хоосон байна');
  alert('Баярлалаа! Мессеж хүлээн авсан.');
  form.reset();
});

// Persist theme in localStorage
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});