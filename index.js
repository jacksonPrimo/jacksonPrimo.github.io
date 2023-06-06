const skills = [
 {
   name: 'HTML 5',
   color: 'rgb(255, 156, 35)',
 },
 {
   name: 'CSS 3',
   color: 'rgb(43, 43, 255)',
 },
 {
   name: 'NODEJS',
   color: 'rgb(2, 163, 2)',
 },
 {
   name: 'NESTJS',
   color: 'rgb(252, 20, 20)',
 },
 {
   name: 'MYSQL',
   color: 'rgb(69, 112, 243)',
 },
 {
   name: 'MONGODB',
   color: 'rgb(16, 218, 16)',
 },
 {
   name: 'RUBY ON RAILS',
   color: 'rgb(150, 13, 20)',
 },
 {
   name: 'STRIPE',
   color: 'rgb(151, 35, 228)',
 },
 {
   name: 'VUEJS',
   color: 'rgb(2, 163, 2)',
 },
 {
   name: 'ANGULARJS',
   color: 'rgb(252, 20, 20)',
 },
 {
   name: 'FIREBASE',
   color: 'rgb(233, 133, 39)',
 },
 {
   name: 'GIT',
   color: 'rgb(0, 0, 0)',
 },
]
const list = document.getElementById('skills-list')

skills.forEach(skill => {
 const bar = createBar(skill.color)
 const title = createTitle(skill.name, "title")
 const container = document.createElement("li");
 container.append(title) 
 container.append(bar)
 list.appendChild(container)
})

function createBar(color) {
 const bar = document.createElement("div");
 bar.className = "bar"
 bar.style.backgroundColor = color
 return bar
}

function createTitle(name) {
 const title = document.createElement("label");
 title.className = "title"
 title.appendChild(document.createTextNode(name))
 return title
}

document.getElementById("current_year").innerHTML = new Date().getFullYear()
