
//Business Logic for the Directory
function PlacesDirectory(){
  this.places = [];
  this.currentId = 0;
}

PlacesDirectory.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesDirectory.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

//Business Logic for Places
function Place(location, landmarks, activities){
  this.location = location;
  this.landmarks = landmarks;
  this.activities = activities;
}

var catalogOfDestinations = new PlacesDirectory;
var tetons = new Place('The Tetons', 'Cathedral Group, Mount Owen, Teewinot', 'Hiking, Skiing, Sightseeing');
var barbados = new Place('Barbados', 'Beautiful Beaches, Shallow Waters, Historic Architecture', 'Swimming, Snorkeling, Hiking, Leisure');
var spain = new Place('Spain', 'Barcelona, Mallorca, la Sagrada Familia, Pyrenees', "Hiking, sightseeing, shopping");

catalogOfDestinations.addPlace(tetons);
catalogOfDestinations.addPlace(barbados);
catalogOfDestinations.addPlace(spain);


//UI Logic
$(document).ready(function() {
  $('#dest').change(function(event) {
    event.preventDefault();
    var selectValue = $('#dest').val()
    $(".panel-info").hide();
    $('img').hide();
    switch (parseInt(selectValue)) {
      case 1:

      break;
      case 2:
        $(".panel-info").show();
        $('h3').text(catalogOfDestinations.places[0].location);
        $('#item1').text(catalogOfDestinations.places[0].landmarks);
        $('#item2').text(catalogOfDestinations.places[0].activities);
        $('#tetons').show();
        break;
      case 3:
        $(".panel-info").show();
        $('h3').text(catalogOfDestinations.places[1].location);
        $('#item1').text(catalogOfDestinations.places[1].landmarks);
        $('#item2').text(catalogOfDestinations.places[1].activities);
        $('#barbados').show();
        break;
      case 4:
        $(".panel-info").show();
        $('h3').text(catalogOfDestinations.places[2].location);
        $('#item1').text(catalogOfDestinations.places[2].landmarks);
        $('#item2').text(catalogOfDestinations.places[2].activities);
        $('#spain').show();
        break;
      }
  });
});
