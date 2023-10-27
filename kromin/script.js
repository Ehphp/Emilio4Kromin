const input = document.querySelector('#input');
const ul = document.querySelector('ul');
const list = document.createElement('li')

function aggiungAttivita() {
    const list = document.createElement('li')
    list.textContent = input.value;
    list.style.backgroundColor = getRandomColor();

    list.addEventListener('click', () => {
        ul.removeChild(list)
    })
    ul.appendChild(list)
    clenForm()
    event.preventDefault();
}
function clenForm() {
    if (input.value !== '') {
        input.value = '';
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const btn = document.getElementById('btn').addEventListener('click', aggiungAttivita);