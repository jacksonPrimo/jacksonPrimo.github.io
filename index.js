var topics = document.getElementsByClassName('div-topico');
for (var i = 0; i < topics.length; i++) {
  topics[i].addEventListener('mouseover', function() {
    const el = $(`[link-${this.id}]`)
    el.addClass("active")
  });

  topics[i].addEventListener('mouseout', function() {
    const el = $(`[link-${this.id}]`)
    el.removeClass("active")
  });
}


$("#current-year").append(new Date().getFullYear())

function downloadPDF() {
    var link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download = 'jackson_aquino.pdf';
    link.click();
}

function createSkill(skill, index){
  animationName = `percentage-${index}`
  $('<style>').text(`@keyframes ${animationName} { 0% { width: 0; } 100% { width: ${skill.percentage}; } }`).appendTo('head');

  const item = $('<li>')
  const title = $('<label>').text(skill.title)
  const image = $('<img>', { 'src': skill.image })
  const percentage = $('<div>').addClass('porcentagem').css({ 
    'animation-name': animationName, 
    'animation-fill-mode': 'forwards',
    'width': '0%', 
    'background-color': skill.color,
  })
  const bar = $('<div>').addClass('barra').append(percentage)
  item.append(title)
  item.append(image)
  item.append(bar)
  return item
}

const skills = [
  {
    title: "HTML 5",
    image: "./assets/logos/logo_html5.svg",
    percentage: "80%",
    color: "#ff9c23"
  }, 
  {
    title: "CSS 3",
    image: "./assets/logos/logo_css3.svg",
    percentage: "80%",
    color: "#2b2bff"
  }, 
  {
    title: "NODE JS",
    image: "./assets/logos/logo_nodejs.svg",
    percentage: "70%",
    color: "#02a302"
  }, 
  {
    title: "POSTGRE SQL",
    image: "./assets/logos/logo_postgresql.svg",
    percentage: "70%",
    color: "#4570f3"
  }, 
  {
    title: "JAVASCRIPT",
    image: "./assets/logos/logo_javascript.svg",
    percentage: "70%",
    color: "#f1f100"
  }, 
]

skills.forEach((skill, index)=>{
  $(".conteudo-topico-skills").append(createSkill(skill, index))
})