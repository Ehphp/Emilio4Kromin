function aggiungiAttivita() {
    const attivita = document.getElementById('input').value

    const li = document.createElement('li')

    li.textContent = attivita

    //  un bottone di cancellazione all'elemento li
    const button = document.createElement('button')
    button.textContent = 'Cancella'
    button.addEventListener('click', function() {
        li.remove()
    })
    li.appendChild(button)

    document.getElementsByClassName('lista').appendChild(li)
}

 document.getElementById("btn").addEventListener("submit", aggiungiAttivita);
