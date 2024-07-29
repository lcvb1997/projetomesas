document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Aqui você pode adicionar a lógica de autenticação
      // Por exemplo, você pode enviar uma solicitação para um servidor para verificar as credenciais
      // Neste exemplo, apenas exibimos as credenciais no console
      console.log('Username:', username);
      console.log('Password:', password);
    });
  });
  