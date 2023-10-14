//Fazendo com que o menu da barra de navegação para celular apareça ou desapareça ao ser clicado
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

//Adicionando sombra a barra de navegação quando o usuário estiver rolando a página para bairro
window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
