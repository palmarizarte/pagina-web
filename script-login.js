 // Lógica para alternar entre los formularios
 const loginForm = document.getElementById('loginForm');
 const registroForm = document.getElementById('registroForm');
 const toggleRegistro = document.getElementById('toggleRegistro');
 const toggleLogin = document.getElementById('toggleLogin');

 toggleRegistro.addEventListener('click', (e) => {
     e.preventDefault(); // Evita que el enlace recargue la página
     loginForm.style.display = 'none'; // Oculta el formulario de inicio de sesión
     registroForm.style.display = 'block'; // Muestra el formulario de registro
 });

 toggleLogin.addEventListener('click', (e) => {
     e.preventDefault(); // Evita que el enlace recargue la página
     registroForm.style.display = 'none'; // Oculta el formulario de registro
     loginForm.style.display = 'block'; // Muestra el formulario de inicio de sesión
 });
 