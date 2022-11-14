const cols = document.querySelectorAll('.col');

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

        text.textContent = color
       col.style.background = color
    })
}

setRandomColors();