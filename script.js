const activeClass = document.querySelectorAll('.active')
    const messages = document.querySelectorAll('.message-header')
    const activeBtn = document.querySelectorAll('.act')
    const redBall = document.querySelectorAll('.red-ball')
    const counteNum = document.querySelector('.num')
    const markAll= document.querySelector('.mark-all-as-read')
    let currentNum = 3

    console.log(activeClass);
    activeBtn.forEach(active => {
      // active.addEventListener('click', (el) => {
        messages.forEach((els) => {
          els.addEventListener('click', () => {
            if (els.parentElement.classList.contains('active')) {
              els.parentElement.classList.remove('active')
              currentNum--
              if(currentNum === 0){
                counteNum.style.opacity = 0
              }
              counteNum.innerHTML = currentNum;
            }
          })
        })
    })
    markAll.addEventListener('click', () => {
      activeClass.forEach(act => {
      act.classList.remove('active')
      counteNum.style.opacity = 0
      })
    })
