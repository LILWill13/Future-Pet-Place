//var pf = new petfinder.Client({apiKey: "RA4n7SbRFoVOEcgaMyrMS4sGV3i12K8GAYWg5x1pJ99IP3RvCh", secret: "udoTfKJrQ727p6MPRYUtPAmeTZSxrHY796AljjgM"});
var locationData = document.querySelector('#location-data')



 
// pf.animal.search()
// .then(function (response) {
// var animalArr = response.data.animals
// for(var i = 0; i < animalArr.length; i++){
//     console.log(animalArr[i])  
// }
// });


$('#location-submit').submit(function(event) {
    event.preventDefault();
    console.log('?');
    console.log(locationData.value)
})