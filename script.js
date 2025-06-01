const toggle = document.getElementById('theme-toggle');

// Функція для увімкнення темної або світлої теми
function setTheme(lightMode) {
  if (lightMode) {
    document.body.classList.add('light-mode');
    toggle.checked = true;
    localStorage.setItem('light-mode', 'true');
  } else {
    document.body.classList.remove('light-mode');
    toggle.checked = false;
    localStorage.setItem('light-mode', 'false');
  }
}

// Перевіряємо localStorage при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  const lightModeStored = localStorage.getItem('light-mode');
  if (lightModeStored === 'true') {
    setTheme(true);
  } else {
    setTheme(false);
  }
});

// Слухаємо зміну toggle
toggle.addEventListener('change', () => {
  setTheme(toggle.checked);
});

document.getElementById('learn-more-btn').addEventListener('click', function () {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('site-content').classList.remove('hidden');
    document.getElementById('site-content').classList.add('fade-in');
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("Дякуємо! Ваше повідомлення надіслано.");
    event.target.reset();
    return false;
  }
  
  
  

 
  