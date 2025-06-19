$(document).ready(function() {
  const $lightbox = $('#lightbox');
  const $lightboxImage = $('.lightbox-imagem');
  const $lightboxClose = $('.lightbox-close');

  function closeLightbox() {
    $lightbox.fadeOut(300, () => {
      $lightboxImage.attr('src', '');
    });
  }

  $lightboxClose.on('click', closeLightbox);
  $lightbox.on('click', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
  $(document).on('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  function createProjectCard(project) {
    const $container = $('.conteudo-topico-lab');
    const $item = $('<div>').addClass('item');

    const $image = $('<img>')
      .attr('src', project.image)
      .on('click', function() {
        const imgSrc = $(this).attr('src');
        $lightboxImage.attr('src', imgSrc);
        $lightbox.css('display', 'flex').hide().fadeIn(300);
      });

    const $descriptionItem = $('<div>').addClass('item-descricao');
    const $title = $('<h1>').text(project.title);
    const $description = $('<p>').text(project.description);
      
    $descriptionItem.append($title, $description);

    project.urls.forEach((url) => {
      const $url = $('<a>')
        .attr({ 'href': url.url, 'target': '_blank' })
        .text(url.description);
      $descriptionItem.append($url);
    });
    
    $item.append($image, $descriptionItem);
    $container.append($item);
  }

  const projects = [
    {
      title: "Be The Hero",
      image: "./assets/projetos/bethehero.png",
      description: "Aplicação feita durante a semana Omnistack, que possui como objetivo ajudar finançeiramente Ongs das mais variadas atividades assim como cadastrar suas proprias Ongs.",
      urls: [
        {
          url: "https://github.com/jacksonPrimo/be-the-hero-OmniStack",
          description: "link do repositório"
        }
      ]
    },
    {
      title: "Clicki",
      image: "./assets/projetos/clicki.png",
      description: "Plataforma para divulgação de redes sociais e e-commerce.",
      urls: [
        {
          url: "https://clicki.com.br/",
          description: "link do projeto"
        }
      ]
    },
    {
      title: "Festit",
      image: "./assets/projetos/festit.png",
      description: "Plataforma para gerenciamento de eventos voltada para organizadores.",
      urls: [
        {
          url: "https://www.organizesuafesta.com.br",
          description: "link do projeto"
        }
      ]
    },
    {
      title: "KP Testes Psy",
      image: "./assets/projetos/kp-tests.png",
      description: "Aplicação feita com o objetivo de automatizar rotinas voltadas para a aplicação de testes psicológicos como cálculos e geração de laudos.",
      urls: [
        {
          url: "https://kp-testes-psy.firebaseapp.com/home/signup",
          description: "link do projeto"
        }
      ]
    },
    {
      title: "Pet Connection",
      image: "./assets/projetos/pet_connection.jpg",
      description: "Projeto desenvolvido como artefato para o meu trabalho de conclusão do curso de Análise e Desenvolvimento de Sistemas. Trata-se de uma aplicação voltada para a divulgação de animais encontrados, perdidos ou para adoção fazendo uso de filtragem por geolocalização, com o intuito de reúnir tutores a seus pets assim como incentivar o ato de adoção de animais.",
      urls: [
        {
          url: "https://github.com/jacksonPrimo/pet-connection-api",
          description: "link do repositório do backend"
        },
        {
          url: "https://github.com/jacksonPrimo/pet-connection-front",
          description: "link do repositório do frontend"
        }
      ]
    },
    {
      title: "Speedio",
      image: "./assets/projetos/speedio.png",
      description: "Plataforma de big data para geração de leads B2B.",
      urls: [
        {
          url: "https://speedio.com.br",
          description: "link do projeto"
        }
      ]
    },
  ];

  projects.forEach((project) => {
    createProjectCard(project);
  });
});