const herobannerRow = document.getElementById('herobanner-row')
const toggleButton = document.getElementById('toggle-button')

toggleButton.addEventListener('click', () => {
    herobannerRow.classList.toggle('shift')
})