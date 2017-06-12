var $quote = document.querySelector('#quote')
var quote = '"Everybody wants happiness, nobody wants pain, but you can\'t have a rainbow without a little rain."'
var letter = quote.split('')
var score = 2

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
    if ($next === null) {
      var $result = document.querySelector('#result')
      $result.textContent = showScore(score)
    }
    else {
      $current.classList.remove('current')
      $current.classList.add('right')
      $next.classList.add('current')
      score += 1
      return
    }
    $current.classList.remove('current')
    $current.classList.add('right')
    $next.classList.add('current')
    return
  }
  else {
    $current.classList.add('wrong')
    score -= 1
  }
})
function showScore(score) {
  if (score >= 90) {
    return 'WOW! INCREDIBLE! You scored ' + score + '%'
  }
  else if (score >= 80) {
    return 'Pretty good...but there\'s room for improvement here. You scored ' + score + '%'
  }
  else {
    return 'Try again. You scored ' + score + '%'
  }
}
