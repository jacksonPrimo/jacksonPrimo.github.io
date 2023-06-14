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