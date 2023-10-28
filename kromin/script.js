let input = document.querySelector('#input');

const ul = document.querySelector('ul');
const list = document.createElement('li')

function aggiungAttivita() {
    const date = new Date();
    const dataInsertimento = date.toDateString();
    const list = document.createElement('li')
    list.textContent = input.value;
    const coloreRandom = getRandomColor();
    list.style.backgroundColor = coloreRandom;
    console.log(input.value)
    list.addEventListener('click', () => {
        console.log(list)
        ul.removeChild(list)
        const output = document.getElementsByClassName('output')
        const tracUl = document.createElement('ul')
        const tracLi = document.createElement('li')
        // const date = new Date();
        const dataCompletamento = date.toDateString();
        tracLi.textContent = `la task ${list.innerText} inserita il ${dataInsertimento} è stata completata il ${dataCompletamento}`;
        tracLi.classList.add('taskCompleted')
        tracLi.style.color = coloreRandom;
        tracLi.style.borderColor = coloreRandom;
        tracUl.appendChild(tracLi)
        output[0].appendChild(tracUl)
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