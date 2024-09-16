// assets/js/main.js

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show')
          console.log('Toggle menu:', nav.classList)
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // Quando clicamos em cada nav__link, removemos a classe show-menu
  navMenu.classList.remove('show')
  console.log('Remove show class from nav-menu:', navMenu.classList)
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
      
      if(sectionsClass){
          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
              sectionsClass.classList.add('active')
              console.log('Add active class to:', sectionsClass)
              if (sectionId === 'skills') {
                  console.log('Skills section is in view. Starting animation.')
                  animateSkills()
              }
          } else {
              sectionsClass.classList.remove('active')
              console.log('Remove active class from:', sectionsClass)
          }
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: false
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .skills__certifications, .skills__technical, .skills__intro, .skills__right-column,.section-title',{interval: 200}); 


/*===== I18N =====*/
i18next
.use(i18nextBrowserLanguageDetector)
.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        "greeting": "Hi,<br>I'm <span class='home__title-color'>Cézar</span><br> Data Scientist",
        "contact": "Contact",
        "home": "Home",
        "about": "About",
        "about_subtitle": "I'am Cézar",
        "about_text": "I am a Data Scientist with a background in Physics and a postgraduate degree in Data Science. My passion is transforming data into insights and intelligent solutions. Currently, I work with web scraping, collecting and analyzing data from various online sources. I have experience in Python, SQL, machine learning, deep learning, and Web Development, allowing me to manage the entire ETL process, from collection to data visualization. Additionally, I have worked as an administrative partner and teacher, developing skills in management and communication. I am naturally curious, love studying and learning new technologies, and constantly stay updated.",
        "skills": "Skills",
        "work": "Work's",
        "skills_intro": "As a Data Scientist, I possess a solid combination of technical and interpersonal skills that enable me to transform complex data into actionable insights and innovative solutions.",
        "skills_programming_title": "Programming Languages",
        "skills_technical_title": "Technical Skills",
        "skills_certifications_title": "Certificates",
        "skills_cert_physics": "Graduation",
        "skills_cert_datascience": "Postgraduate",
        "name_label": "Name",
        "email_label": "Email",
        "message_label": "Message",
         "send_button": "Send"
      }
    },
    es: {
      translation: {
        "greeting": "Hola,<br>Soy <span class='home__title-color'>Cézar</span><br> Científico de Datos",
        "contact": "Contacto",
        "home": "Inicio",
        "about": "Acerca de",
        "about_subtitle": "Soy Cézar",
        "about_text": "Soy Científico de Datos con formación en Física y posgrado en Ciencia de Datos. Mi pasión es transformar datos en insights y soluciones inteligentes. Actualmente, trabajo con web scraping, recolectando y analizando datos de diversas fuentes en línea. Tengo experiencia en Python, SQL, machine learning, deep learning y Desenvolvimento Web, lo que me permite gestionar todo o proceso ETL, desde la recolección hasta la visualización de datos. Además, he trabajado como socio administrativo y profesor, desarrollando habilidades en gestión y comunicación. Soy naturalmente curioso, adoro estudiar y aprender nuevas tecnologías y me mantengo constantemente actualizado.",
        "skills": "Habilidades",
        "work": "Trabajos",
        "skills_intro": "Como Científico de Datos, poseo una sólida combinación de habilidades técnicas e interpersonales que me permiten transformar datos complejos en insights accionables y soluciones innovadoras.",
        "skills_technical_title": "Habilidades Técnicas",
        "skills_programming_title": "Lenguajes ",
        "skills_certifications_title": "Certificados",
        "skills_cert_physics": "Graduación",
        "skills_cert_datascience": "Graduado",
        "name_label": "Nombre",
        "email_label": "Correo electrónico",
        "message_label": "Mensaje",
        "send_button": "Enviar"
      }
    },
    pt: {
      translation: {
        "greeting": "Oi,<br>Eu sou <span class='home__title-color'>Cézar</span><br> Cientista de Dados",
        "contact": "Contato",
        "home": "Início",
        "about": "Sobre",
        "about_subtitle": "Eu sou Cézar",
        "about_text": "Sou Cientista de Dados com formação em Física e pós-graduação em Ciência de Dados. Minha paixão é transformar dados em insights e soluções inteligentes. Atualmente, trabalho com web scraping, coletando e analisando dados de diversas fontes online. Tenho experiência em Python, SQL, machine learning, deep learning e Desenvolvimento Web, o que me permite gerenciar todo o processo ETL, desde a coleta até a visualização dos dados. Além disso, atuei como sócio administrativo e professor, desenvolvendo habilidades em gestão e comunicação. Sou naturalmente curioso, adoro estudar e aprender novas tecnologias e constantemente me manter atualizado.",
        "work" : "Trabalhos",
        "skills": "Habilidades",
        "skills_intro": "Como Cientista de Dados, possuo uma combinação sólida de habilidades técnicas e interpessoais que me permitem transformar dados complexos em insights acionáveis e soluções inovadoras.",
        "skills_technical_title": "Habilidades Técnicas",
        "skills_programming_title": "Linguagens",
        "skills_certifications_title": "Certificados",
        "skills_cert_physics": "Graduação",
        "skills_cert_datascience": "Pós-graduação",
        "name_label": "Nome",
        "email_label": "E-mail",
        "message_label": "Mensagem",
        "send_button": "Enviar"
        
      }
    }
  }
}, function(err, t) {
  if (err) return console.error(err);
  // Inicializar a tradução
  updateContent();
});

/*===== Função para Atualizar Conteúdo =====*/
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(elem) {
      const translation = i18next.t(elem.getAttribute('data-i18n'));

      // Se for um input ou button, alterar o valor
      if (elem.tagName === 'INPUT' || elem.tagName === 'BUTTON') {
          elem.value = translation;
      } else {
          elem.innerHTML = translation;
      }
      
      console.log(`Updated content for: ${elem.getAttribute('data-i18n')} -> ${elem.innerHTML}`);
  });

  // Traduzir placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(elem) {
    elem.placeholder = i18next.t(elem.getAttribute('data-i18n-placeholder'));
  });

  // Verificar se os elementos .skills__bar-fill existem após a tradução
  const progressBars = document.querySelectorAll('.skills__bar-fill');
  console.log(`Found ${progressBars.length} progress bars after translation.`);
}
 

/**
 * Função para animar as barras de progresso.
 * Define a largura baseada no atributo data-width.
 */

function animateSkills() {
  const progressBars = document.querySelectorAll('.skills__bar-fill');
  console.log(`Found ${progressBars.length} progress bars.`); // Verifica quantos elementos foram encontrados
  progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = '0'; // Reiniciar para 0
      void bar.offsetWidth; // Forçar reflow
      bar.style.width = width; // Definir a largura final
  });
}


/**
 * Configuração do IntersectionObserver para detectar quando a seção "Skills" entra na visualização.
 * Quando detectada, chama a função `animateSkills` e desobserva a seção para evitar re-animações.
 */
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          console.log('Skills section is in view. Starting animation.');
          animateSkills();
          skillsObserver.unobserve(entry.target); // Anima apenas uma vez
      }
  });
}, {
  threshold: 0.1, // Dispara quando 10% da seção está visível
  rootMargin: '0px 0px -50px 0px' // Ajuste conforme necessário
});

// Inicia a observação na seção "Skills"
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    console.log('Observing skills section for animation.');
    skillsObserver.observe(skillsSection);
} else {
    console.error('Skills section not found in the DOM.');
}

/*===== Language Switcher =====*/
document.querySelectorAll('.lang-switch').forEach(function(elem) {
  elem.addEventListener('click', function() {
      const selectedLang = this.getAttribute('data-lang');
      i18next.changeLanguage(selectedLang, () => {
          updateContent();
          setActiveLanguage(selectedLang);
      });
  });
});

/*===== Função para Definir o Idioma Ativo =====*/
function setActiveLanguage(lang) {
  document.querySelectorAll('.lang-switch').forEach(function(button) {
      button.classList.remove('active');
  });
  const activeButton = document.querySelector(`.lang-switch[data-lang="${lang}"]`);
  if(activeButton){
      activeButton.classList.add('active');
  }
}

/*===== Inicializar o Idioma Ativo ao Carregar a Página =====*/
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM completamente carregado e analisado.');
  const currentLang = i18next.language || 'en';
  setActiveLanguage(currentLang);
});
console.log(document.querySelectorAll('.skills__bar-fill'));

// Função para abrir o modal e definir a imagem
function openModal(modalId, imgSrc) {
    var modal = document.getElementById(modalId);
    var modalImg = modal.querySelector('.modal-content');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

// Função para fechar o modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Adiciona eventos de clique às imagens para abrir o modal
document.querySelectorAll('.cert-image').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this.getAttribute('data-modal'), this.src);
    });
});
