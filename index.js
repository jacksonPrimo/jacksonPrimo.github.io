let p_sobre = $('[name=sobre]').position().top - 68
let link_sobre = $('[link-sobre]')
let p_skills = $('[name=skills]').position().top - 220
let link_skills = $('[link-skills]')
let p_lab = $('[name=lab]').position().top - 104
let link_lab = $('[link-lab]')
let p_ctt = $('[name=ctt]').position().top - 146
let link_ctt = $('[link-ctt]')
let style = {'color': 'var(--primary)', 'font-weight': 'bold', 'text-decoration': 'overline'}
let no_style = {'color': 'var(--text-1)', 'font-weight': '200', 'text-decoration': 'none'}
setInterval(()=>{
    let posicao = $(document).scrollTop()
    if(posicao >= p_sobre && posicao < p_skills){
        link_sobre.css(style)
    }else{
        link_sobre.css(no_style)
    }
    if(posicao >= p_skills && posicao < p_lab){
        link_skills.css(style)
    }else{
        link_skills.css(no_style)
    }
    if(posicao >= p_lab && posicao < p_ctt){
        link_lab.css(style)
    }else{
        link_lab.css(no_style)
    }
    if(posicao >= p_ctt){
        link_ctt.css(style)
    }else{
        link_ctt.css(no_style)
    }
}, 100)

// var topics = document.getElementsByClassName('div-topico');
// for (var i = 0; i < topics.length; i++) {
//   topics[i].addEventListener('mouseover', function() {
//     this.style.color = '#fff';
//     this.style.backgroundColor = '#333';
//     console.log(topics[i])
//   });

//   topics[i].addEventListener('mouseout', function() {
//     this.style.color = '#333';
//     this.style.backgroundColor = 'transparent';
//   });
// }


$("#current-year").append(new Date().getFullYear())

function downloadPDF() {
    var link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download = 'jackson_aquino.pdf';
    link.click();
}