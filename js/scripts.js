//UI Logic
$(document).ready(function() {
  $('img#tetons').click(function(){
    $('img').toggle();
    $('.panel-info').toggle(function(place1){
      $('panel-info').append(place1);
    });


  });
});

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
function Place(location, landmarks, timeOfYear, activities){
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.activities = activities;
}

var catalogOfDestinations = new PlacesDirectory;
var place1 = new Place('The Tetons', 'Cathedral Group, Mount Owen, Tewwinot', 'All seasons', 'Hiking, Skiing, Sightseeing');
var place2 = new Place('Barbados', 'Beautiful Beaches, Shallow Waters, Historic Architecture', 'December to May', 'Swimming, Snorkeling, Hiking, Leisure');
var place3 = new Place('Spain', 'Barcelona, Mallorca, la Sagrada Familia, Pyrenees', "All seaons", "Hiking, sightseeing, shopping");
var place4 = new Place("Lake Garda", "The Ancient Fortified Town of Sirmione, Scaliger Castle, The Sulfur Springs", "All Seasons", "Swimming, Sightseeing, Dining");
var place5 = new Place("Arches National Park", "Double Arch, Firey Furnace, Delicate Arch", "All Seasons", "Hiking, sightseeing, Guided Tours");
var place6 =new Place('Alvord Desert', 'Alvord Hot Springs, Mickey Hot Springs, Borax Lake', 'All Seasons', "Traversing, Taking a Dip");

catalogOfDestinations.addPlace(place1);
catalogOfDestinations.addPlace(place2);
catalogOfDestinations.addPlace(place3);
catalogOfDestinations.addPlace(place4);
catalogOfDestinations.addPlace(place5);
catalogOfDestinations.addPlace(place6);
