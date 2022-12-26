const btn = document.querySelector('.btn-generator')

const main = document.querySelector('.element')

const mostrarCor = document.querySelector('.hexcolor')

function newColor() {

  const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    console.log(color)

    mostrarCor.innerHTML = color

    main.style.backgroundColor = color

  }
  
  btn.addEventListener('click', newColor)






