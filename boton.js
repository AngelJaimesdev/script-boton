document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('pay-button');
  console.log("JS cargado");
  if (!button) return;
  button.innerHTML = '';
  console.log("JS cargado");

  const img = document.createElement('img');
  // img.src = 'logo_dilo/DILO_LOGO-04.png'
  // img.alt = 'Logo de DILO';
  // img.width = 50;
  // img.style.height = 'auto';

  const text = document.createElement('span');
  text.textContent = 'Cupo Dilo';
  text.style.fontFamily = 'Arial, sans-serif';
  text.style.color = '#0066ad';
  text.style.fontSize = '15px';
  text.style.fontWeight = 'bold';

  button.insertBefore(img, button.firstChild);
  button.appendChild(text);
  button.style.width = '170px';
  button.style.height = '50px';
  button.style.backgroundColor = '#f6f6f6';
  button.style.display = 'flex';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.gap = '20px';
  button.style.borderRadius = '10px';
  button.style.border = '2px solid #2d2e7e';
  button.style.cursor = 'pointer';
  button.style.transition = 'background-color 0.3s, border-color 0.3s';

  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'rgba(0, 155, 221, 0.5)';
    button.style.borderColor = '#f6f6f6';
    text.style.color = '#f6f6f6';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#f6f6f6';
    button.style.border = '2px solid #2d2e7e';
    text.style.color = '#0066ad';
  });

  button.addEventListener('click', async () => {
    try {
      const token = button.getAttribute('secureToken');

      // url prueba local
      const baseUrl = "https://triplea-fnb-portalpagos.partnerdavinci.com/login";
      const url = `${baseUrl}?token=${encodeURIComponent(token)}`;
      window.open(url, '_blank');
    } catch (err) {
      console.error("Error al enviar credenciales");
    }
  });
});
