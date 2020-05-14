// const bodyParser = require("body-parser");

const form = document.querySelector('form')
const loadingGif = document.querySelector('.loading');

const API_URL ='http://localhost:8080/hellos'

loadingGif.style.display = 'none'

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    
    const content = formData.get('content')

    const message = {
        name,
        content
    }
    // console.log(message);  

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'content-type' : 'application/json'
            
        }

    })

    loadingGif.style.display = ''
}
)