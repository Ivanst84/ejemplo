function switchMode() {
    const htmlElement = document.querySelector('html');
    const bodyElement = document.querySelector('body');
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const sunMode = document.querySelector('.sun-mode');
    const moonMode = document.querySelector('.moon-mode');
  
    // Oculta o muestra los iconos del sol y la luna según el estado del modo oscuro
    moonMode.style.display = darkModeSwitch.checked ? 'none' : 'block';
    sunMode.style.display = darkModeSwitch.checked ? 'block' : 'none';
  
    // Cambia las clases CSS o estilos del HTML o body según el estado del modo oscuro
    if (darkModeSwitch.checked) {
      htmlElement.classList.add('dark');
      bodyElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      bodyElement.classList.remove('dark');
    }
  
    // Guarda el estado en localStorage o cookies si es necesario
  }
  
  document.addEventListener('DOMContentLoaded', switchMode);
  
  document.getElementById('dark-mode-switch').addEventListener('change', switchMode);
  