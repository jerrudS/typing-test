var $quote = document.querySelector('#quote')

var quote = '"Everybody wants happiness, nobody wants pain, but you can\'t have a rainbow without a little rain."'

/*creates an array of each letter*/
var letter = quote.split('')

/*grabs each letter and creates a span from it*/
for (var i = 0; i < letter.length; i++) {
  var el = document.createElement('span')
  el.textContent = letter[i]
  $quote.appendChild(el)
}

var style = document.querySelector('span')
style.classList.add('current')
