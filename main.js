var $quote = document.querySelector('#quote')

var quote = '"Everybody wants happiness, nobody wants pain, but you can\'t have a rainbow without a little rain."'

var letter = quote.split('')

for (var i = 0; i < letter.length; i++) {
  var el = document.createElement('span')
  el.textContent = letter[i]
  $quote.appendChild(el)
}

document.addEventListener('DOMContentLoaded', function() {
  var $style = document.querySelector('span')
  $style.classList.add('current')
})

document.addEventListener('keypress', function(event) {
  var $current = document.querySelector('.current')
  if (event.key === $current.textContent) {
    var $next = $current.nextElementSibling
    $current.classList.remove('current')
    $current.classList.add('right')
    $next.classList.add('current')
    return
  }
  else {
    $current.classList.add('wrong')
  }
})
