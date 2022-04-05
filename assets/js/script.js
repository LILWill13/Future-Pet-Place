var pf = new petfinder.Client({apiKey: "RA4n7SbRFoVOEcgaMyrMS4sGV3i12K8GAYWg5x1pJ99IP3RvCh", secret: "udoTfKJrQ727p6MPRYUtPAmeTZSxrHY796AljjgM"});



 
pf.animal.search()
.then(function (response) {
var animalArr = response.data.animals
for(var i = 0; i < animalArr.length; i++){
    
}
});

