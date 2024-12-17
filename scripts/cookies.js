if (!localStorage.getItem('cookies-accepted')) {
  document.getElementById('cookie-banner').style.display = 'block';
}

// Função para aceitar os cookies
function acceptCookies() {
  localStorage.setItem('cookies-accepted', 'true');
  document.getElementById('cookie-banner').style.display = 'none'; // Ocultar o banner
}