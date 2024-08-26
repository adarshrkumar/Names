let names = prompt('Enter a comma-separated list of names: ').split(',')

/* ======== THINGS ======== */
document.title = ''
names.forEach(function(name, index) {
  let nEle = document.createElement('h1')
  nEle.classList.add('name')
  document.title = `${document.title}, ${name}`
  name = name.split(' ')
  name.forEach(function(n, i) {
    var word = document.createElement('span')
    word.classList.add('word')
    word.textContent = n
    nEle.appendChild(word)
  })

  let eleN = nEle.cloneNode(true)
  eleN.classList.add('border')
  eleN.setAttribute('aria-hidden', true)
  document.querySelector('.hero').appendChild(nEle)
  nEle.appendChild(eleN)
})
document.querySelector('.hero').style.setProperty('--names', names.length)
document.title = document.title.substring(2)