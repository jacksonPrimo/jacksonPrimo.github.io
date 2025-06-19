function calcAge() {
  const birthDate = new Date(2000, 5, 7);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const currentMonth = today.getMonth();
  const diaAtual = today.getDate();
  
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  if (currentMonth < birthMonth || (currentMonth === birthMonth && diaAtual < birthDay)) {
    age--;
  }

  return age;
}
let ageElement = document.getElementById('age')
ageElement.append(calcAge())

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
    title: "JAVASCRIPT",
    image: "./assets/logos/logo_javascript.svg",
    percentage: "70%",
    color: "#f1f100"
  },
  {
    title: "HTML 5",
    image: "./assets/logos/logo_html5.svg",
    percentage: "70%",
    color: "#ff9c23"
  }, 
  {
    title: "CSS 3",
    image: "./assets/logos/logo_css3.svg",
    percentage: "70%",
    color: "#2b2bff"
  }, 
  {
    title: "NODE JS",
    image: "./assets/logos/logo_nodejs.svg",
    percentage: "75%",
    color: "#02a302"
  }, 
  {
    title: "NEST JS",
    image: "./assets/logos/logo_nest.svg",
    percentage: "65%",
    color: "#ff0055"
  },
  {
    title: "RUBY",
    image: "./assets/logos/logo_ruby.svg",
    percentage: "70%",
    color: "#ec0808"
  },
  {
    title: "POSTGRE SQL",
    image: "./assets/logos/logo_postgresql.svg",
    percentage: "70%",
    color: "#4570f3"
  }, 
  {
    title: "VUE JS",
    image: "./assets/logos/logo_vue.svg",
    percentage: "80%",
    color: "#2bc52b"
  },
  {
    title: "REACT",
    image: "./assets/logos/logo_react.svg",
    percentage: "50%",
    color: "#00c3ff"
  },
  {
    title: "FIREBASE",
    image: "./assets/logos/logo_firebase.svg",
    percentage: "65%",
    color: "#ff8800"
  },
  {
    title: "DOCKER",
    image: "./assets/logos/logo_docker.svg",
    percentage: "70%",
    color: "#00c3ff"
  },
  {
    title: "N8N",
    image: "./assets/logos/logo_n8n.svg",
    percentage: "40%",
    color: "#ff006a"
  },
  {
    title: "RABBITMQ",
    image: "./assets/logos/logo_rabbitmq.svg",
    percentage: "60%",
    color: "#b66100"
  },
]

skills.forEach((skill, index)=>{
  $(".conteudo-topico-skills").append(createSkill(skill, index))
})