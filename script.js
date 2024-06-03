//Funções gerais
/*------------------------------*/
function navigateTo(url) {
  window.location.href = url;
  sessionStorage.setItem('link', window.location.href)
  } 

function navigateToBack() {
window.location.href = sessionStorage.getItem('link');
}

function ChangeTheme() {
  const button = document.getElementById('darkmode');
  document.querySelector(':root').classList.toggle('darkmode');

  if (document.querySelector(':root').classList.contains('darkmode')) {
    button.textContent = 'LightMode ☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    button.textContent = 'DarkMode 🌕';
    localStorage.setItem('theme', 'light');
  }
}

function fixartema() {
  const theme = localStorage.getItem('theme');
  const button = document.getElementById('darkmode');

  if (theme === 'dark') {
    document.querySelector(':root').classList.toggle('darkmode');
    button.textContent = 'LightMode ☀️';
  } else {
    document.querySelector(':root').classList.add(':root');
    button.textContent = 'DarkMode 🌕';
  }
}

document.addEventListener('DOMContentLoaded', function() {
   fixartema();
 });

if (window.location.pathname === '/index.html'){
document.addEventListener('DOMContentLoaded', function () {
 function updateWelcomeMessage() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const loggedInUserName = sessionStorage.getItem('loggedInUserName');

    if (isLoggedIn === 'true' && loggedInUserName) {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent = `Seja bem-vindo ao Nosso Site, ${loggedInUserName}!`;
    }
}
updateWelcomeMessage();
});
};

    //Funções de Registro e Login
 /*---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    // Função para registrar um novo usuário
    function register() {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if(password.length < 5){
            alert('A senha deve ter no minimo 5 caracteres' )
            return;
        }
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        sessionStorage.setItem('user', JSON.stringify(user));
        alert('Usuário registrado com sucesso!');
        window.location.href = 'Login.html';
    }

    // Função para fazer login do usuário
    function login() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const storedUser = JSON.parse(sessionStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert('Login realizado com sucesso!');
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('loggedInUserName', storedUser.name);
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos!');
        }
    }
    window.register = register;
    window.login = login;

});

    //Movimento e transição dos Tabs
/*-----------------------------------------*/ 
if (window.location.pathname === '/index.html'){
    let indexAtual = 0;
    const tabs = document.querySelectorAll('.tabs-container .tab');
    const totalTabs = tabs.length;
    let interval;

    function showTab(index) {
        tabs.forEach(function (tab, i) {
            tab.classList.toggle('active', i === index);
        });
    }

    function passarTab() {
        indexAtual = (indexAtual + 1) % totalTabs;
        showTab(indexAtual);
    }

    function voltarTab() {
        indexAtual = (indexAtual - 1 + totalTabs) % totalTabs;
        showTab(indexAtual);
    }

    function startInterval() {
        interval = setInterval(passarTab, 3000);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    showTab(indexAtual);
    startInterval();
    window.passarTab = passarTab;
    window.voltarTab = voltarTab;


    tabs.forEach(function (tab) {
        tab.addEventListener('mouseenter', stopInterval);
        tab.addEventListener('mouseleave', startInterval);
    });
};

    //API e Galeria
/*--------------------------------*/
    if (window.location.pathname === '/Galeria.html') {
  const gallery = document.getElementById('gallery');
  const loadMoreButton = document.getElementById('loadMore');
  const apiUrl = 'https://randomfox.ca/floof/';
  const loadedImages = new Set(); // Conjunto para armazenar URLs das imagens carregadas

  // buscar imagens da API
  async function fetchImages() {
      const newImages = [];
      while (newImages.length < 10) {
          try {
              const response = await fetch(apiUrl);
              const image = await response.json();
              if (!loadedImages.has(image.image)) {
                  loadedImages.add(image.image);
                  newImages.push(image.image);
              }
          } catch (error) {
              console.error('Erro ao buscar imagens:', error);
          }
      }
      updateGallery(newImages);
  }

  function updateGallery(images) {
      gallery.innerHTML = ''; // Limpa a galeria antes de adicionar novas imagens
      images.forEach(imageUrl => {
          const card = document.createElement('div');
          card.className = 'tab-sobre';
          const img = document.createElement('img');
          img.src = imageUrl;
          img.onload = () => {
          card.style.gridRowEnd = span `${Math.ceil(img.height / 10)}`;
          };
          card.appendChild(img);
          gallery.appendChild(card);
      });
  }
  fetchImages();

  loadMoreButton.addEventListener('click', fetchImages);
    }

    //Função zzzz
/*--------------------------------*/
    if (window.location.pathname === '/TerCon.html') {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;
            let triggerPosition = 600;

            if (scrollPosition > triggerPosition) {
                soneca();
            }
        });

        function soneca() {
            let z = document.createElement('span');
            z.textContent = 'z';
            z.classList.add('zzz');
            z.style.left = Math.random() * window.innerWidth + 'px';
            document.body.appendChild(z);

            setTimeout(function () {
                z.remove();
            }, 5000);
        }
    }

    //Scrpits da tela 'Sobre'
/*------------------------------------------*/    
    if (window.location.pathname === '/Sobre.html') {
    document.querySelectorAll('.tab-sobre').forEach(function (tab) {
        tab.addEventListener('click', function () {
            openOverlay(tab);
        });
    });
    

function openOverlay(tab) {
    const overlay = document.getElementById('overlay');
    const overlayText = document.getElementById('overlay-text');
    const overlayImg = document.getElementById('overlay-img');
    const githubLink = document.getElementById('overlay-link');

    const hoverText = tab.querySelector('.hover-text').textContent;
    const imgSrc = tab.querySelector('img').src;
    const hoverLink = tab.querySelector('a').href;

    overlayText.textContent = hoverText;
    overlayImg.src = imgSrc;
    githubLink.href = hoverLink;

    overlay.style.display = 'flex';
}

function submitText() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const additionalInput = document.getElementById('additional-input');

    if (additionalInput.value === "") {
        alert('O campo de texto não pode estar vazio.');
        return;
    }
    
    if (isLoggedIn === 'true') {
        alert(`Texto enviado com sucesso!`);
        additionalInput.value = "";
        closeOverlay()
    } 
    else {
        alert('Você precisa estar logado para enviar o texto.');
        window.location.href = 'Login.html';
    }
}

function closeOverlay() {
        const overlay = document.getElementById('overlay');
        const additionalInput = document.getElementById('additional-input');
        overlay.style.display = 'none';
        additionalInput.value == "";
    }
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closeOverlay();
            }
        });
    }
