function acceptCookies() {
  // Atualiza o consentimento do Google
  gtag('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': 'granted'
  });

  // Oculta o banner
  document.getElementById('cookie-banner').style.display = 'none';
}

if (!localStorage.getItem('cookies-accepted')) {
  document.getElementById('cookie-banner').style.display = 'block';
}

// Função para aceitar os cookies
function acceptCookies() {
  localStorage.setItem('cookies-accepted', 'true');
  document.getElementById('cookie-banner').style.display = 'none'; // Ocultar o banner
}

