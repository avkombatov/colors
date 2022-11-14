const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', event =>{
   if(event.code === 'Space'){
    setRandomColors()
   }
})

function generateRandomeColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''

    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]

    }
    return '#' + color
}

function setRandomColors() {
    cols.forEach((col) => {
        const color = generateRandomeColor()
        const text = col.querySelector('h2')
        const lock = col.querySelector('.fa-lock')

        text.textContent = color
        col.style.background = color
        lock.style.color = color

        setTextColor(text, color)
        setTextColor(lock, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
 
}

setRandomColors();