// External Libs
import SmoothScroll from 'smooth-scroll'

export const toggleMobileNav = () => {
  const wrapper = document.getElementsByTagName('body')[0]

  // toggle open/closed calsses for transition effects
  const superToggle = (element, class0, class1) => {
    element.classList.toggle(class0)
    element.classList.toggle(class1)
  }
  superToggle(wrapper, 'mobile-nav--is-open', 'mobile-nav--is-closed')
}

export const overlayClose = overlay => {
  const wrapper = document.getElementsByTagName('body')[0]

  overlay.onclick = () => {
    wrapper.classList.add('mobile-nav--is-closed')
    wrapper.classList.remove('mobile-nav--is-open')
  }

  document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ('key' in evt) {
      isEscape = evt.key === 'Escape' || evt.key === 'Esc'
    } else {
      isEscape = evt.keyCode === 27
    }
    if (isEscape) {
      wrapper.classList.add('mobile-nav--is-closed')
      wrapper.classList.remove('mobile-nav--is-open')
    }
  }

  // console.log('click overlay')
}

export const scrollHeader = () => {
  const header = document.getElementById('headerMain')
  window.onscroll = e => {
    scrollFunction()
    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        header.classList.add('fill')
        header.classList.remove('unfill')
      } else {
        header.classList.remove('fill')
        header.classList.add('unfill')
      }
    }
  }
}

export const moneyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const wordInPhrase = (sentence, word) => {
  // Returns a boolean
  const myString = sentence.tolowercase
  const myWord = word
  return new RegExp('\b' + myWord + '\b').test(myString)
}

export const animateText = inputWords => {
  let words = inputWords
  const wordArray = []
  let currentWord = 0

  words[currentWord].style.opacity = 1
  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i])
  }

  function changeWord() {
    let cw = wordArray[currentWord]
    let nw =
      currentWord === words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1]
    for (let i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i)
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind'
      nw[0].parentElement.style.opacity = 1
      animateLetterIn(nw, i)
    }

    currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1
  }

  function animateLetterOut(cw, i) {
    setTimeout(function() {
      cw[i].className = 'letter out'
    }, i * 80)
  }

  function animateLetterIn(nw, i) {
    setTimeout(function() {
      nw[i].className = 'letter in'
    }, 340 + i * 80)
  }

  function splitLetters(word) {
    var content = word.innerHTML
    word.innerHTML = ''
    let letters = []
    for (let i = 0; i < content.length; i++) {
      var letter = document.createElement('span')
      letter.className = 'letter'
      letter.innerHTML = content.charAt(i)
      word.appendChild(letter)
      letters.push(letter)
    }

    wordArray.push(letters)
  }

  changeWord()
  setInterval(changeWord, 4000)
}

export const smoothScroll = () => {
  try {
    const scroll = new SmoothScroll('a[href*="#"]', {
      ignore: '[data-scroll-ignore]',
      header: null,
      topOnEmptyHash: true,

      // Speed & Duration
      speed: 500,
      speedAsDuration: false,
      durationMax: null,
      durationMin: null,
      clip: true,

      easing: 'easeInOutCubic',
      customEasing: function(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time
      },
      updateURL: false, // Update the URL on scroll
      popstate: false,

      // Custom Events
      emitEvents: true, // Emit custom events
    })
    return scroll
  } catch (oError) {
    console.log(oError)
  }
}
