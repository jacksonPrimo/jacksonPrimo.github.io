const skills = [
  {
    name: 'HTML 5',
    color: 'rgb(255, 156, 35)',
    porcentage: 70,
    bottom: -15
  },
  {
    name: 'CSS 3',
    color: 'rgb(43, 43, 255)',
    porcentage: 60,
    bottom: -20
  },
  {
    name: 'NODE JS',
    color: 'rgb(2, 163, 2)',
    porcentage: 80,
    bottom: -10
  },
  {
    name: 'MYSQL',
    color: 'rgb(69, 112, 243)',
    porcentage: 30,
    bottom: -25
  },
  {
    name: 'MYSQL',
    color: 'rgb(69, 112, 243)',
    porcentage: 30,
    bottom: -25
  },
]
const list = document.getElementById('skills-list')

function MakeACoffeCup(percents, bottom) {
  const coffeecup = document.createElement('div')
  coffeecup.className = 'coffeecup'
  const handle = document.createElement('div')
  handle.className = 'handle'
  const body = document.createElement('div')
  body.className = 'body'
  const content = document.createElement('div')
  content.className = 'content'
  const progress = document.createElement('div')
  progress.className = 'progress'
  progress.style.bottom = `${bottom}px`
  const label = document.createElement('label')
  label.className = 'percentage'
  label.appendChild(document.createTextNode(`${percents}%`))
  
  content.appendChild(progress)
  body.append(content, label)

  coffeecup.append(body, handle)
  return coffeecup
}

skills.forEach(skill => {
  const label = document.createElement("label");
  label.className = 'title'
  label.style.color = skill.color
  label.appendChild(document.createTextNode(skill.name))
  
  const li = document.createElement("li");
  const coffeecup = MakeACoffeCup(skill.porcentage, skill.bottom)
  li.append(label, coffeecup)
  
  list.appendChild(li)
})
