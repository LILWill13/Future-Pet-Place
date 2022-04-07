// how we are able to get the data within the api

var pf = new petfinder.Client({apiKey: "RA4n7SbRFoVOEcgaMyrMS4sGV3i12K8GAYWg5x1pJ99IP3RvCh", secret: "udoTfKJrQ727p6MPRYUtPAmeTZSxrHY796AljjgM"});

var searchButton = document.querySelector('#search-button');

var animalSearch;


$('.dropdown-trigger').dropdown();
$('#dropdown2').on('click', 'li:not(.init)', function() {
    return animalSearch = $(this).text()
})

searchButton.addEventListener('click', function() {
    pf.animal.search()
    .then(function (response) {
        // takes in all the animal data objects
        var animals = response.data.animals
        // an empty array that will take in only the dogs up for adoption
        var dogArr = [];
        // loops through all the animals data.
        for(let i = 0; i < animals.length; i++) {
            // singles out dogs and pushes them into the dog array
            if(animals[i].type == animalSearch){
                dogArr.push(animals[i])
        }  
    }
        // loops through the dog array
        for(let i = 0; i < dogArr.length; i++){

            if(i == i){
                // looks to see if the data includes a photo of the dog
                var maybePhoto = dogArr[i].primary_photo_cropped
                // 
                if(maybePhoto == null){
                } else {
                    maybePhoto = dogArr[i].primary_photo_cropped.small
                }
                
                // gets the dog name for current object
                var dogName = dogArr[i].name
                // gets the dog breed for current object
                var dogBreed = dogArr[i].breeds.primary
                // gets the dog gender for current object
                var dogGender = dogArr[i].gender
                // gets the link to the dog
                var url = dogArr[i].url

                console.log(dogArr[i])


                // creates the card dive
               var cardDiv = $('<div>')
                // adds the class of card to the newly made div  
               cardDiv.addClass('card')

                //creates the img div
               var imgDiv = $('<div>')
                // creates the class of card-image to the newly made div
               imgDiv.addClass('card-image')
                // creates an image element
               var img = $('<img>')
                // adds the path to the photo within the data to an src attribute
               img.attr('src', maybePhoto)
                // appends the image to the image div
               imgDiv.append(img)
                
                // creates the content div
               var contentDiv = $('<div>')
                // adds the class of card-content to the newly made div
               contentDiv.addClass('card-content')
                // creates an h3 element
               var h3El = $('<h3>')
                // adds the dogs name to the h3 element
               h3El.text(dogName)
                // appends the h3 element to the content div
               contentDiv.append(h3El)

                // creates a ul element
               var ulEl = $('<ul>')
                // creates a li element
               var liEl = $('<li>')
                // appends the li to the ul
               ulEl.append(liEl)
                // sets the li text to the dogs breed
               liEl.text(dogBreed)
                // appends the ul element to the content div
               contentDiv.append(ulEl)

               var linkDiv = $('<div>')
               linkDiv.addClass('card-action')
               var aEl = $('<a>')
               aEl.attr('href', url)
               aEl.text('Find more here')
               linkDiv.append(aEl)

                cardDiv.append(imgDiv, contentDiv, linkDiv )
                var cards = $('#cards')

                cards.append(cardDiv)  
            }
        } 
        console.log(dogArr)
});
})

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFycnlnaWxyZWF0aDMiLCJhIjoiY2wxbWU2ZmdjMDAzdTNqcWdlZzZqcGM3biJ9.jU5JrihBnsXkkmBUhuSGog';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-84.4, 33.8], // starting position [lng, lat]
zoom: 8 // starting zoom
});