const API = 'https://got-quotes.herokuapp.com/quotes';

fetch(API)  
  .then((response) => {
    response.json().then((data) => {
      let phrase    = document.querySelector('#phrase')
      let character = document.querySelector('#character')
      
      phrase.innerHTML    = data.quote
      character.innerHTML = data.character
    })
  })
  .catch(function(err){
    console.error('Failed retrieving information', err)
  })
