var queryURL = 'https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342'




$(document).ready(function(){
    $('select').formSelect();
  });

  fetch(queryURL)
  .then(function (data) {
      return data.json();
  })
  .then(function (data) {
      console.log(data)
  })