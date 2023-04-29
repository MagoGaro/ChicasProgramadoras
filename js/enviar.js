const scriptURL = 'https://script.google.com/macros/s/AKfycbxZvbO-hzPMPLUvoAAjVikucXGFLxDbsGVsAIi2Iy4_4t3On7wdqkol4hUXgYY5iPwL/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Enviado!', response))
    .catch(error => console.error('Error!', error.message))
})