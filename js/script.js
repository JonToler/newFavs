// Back End Code


// Front End Code
$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var yourFavs = [];
    var newFavs =[];
    var yrList = [];
    var j = 0;
    $("#yourList").empty();
    for (var i = 1; i < 6; i += 1) {
      var favInput = "#favThing" + i;
      yourFavs.push($(favInput).val());
    };
    newFavs =[yourFavs[1],yourFavs[0],yourFavs[2]];
    yourFavs.forEach(function(yourFav) {
      newFavs.push(yourFavs[j]);
      j++;
    });
    // console.log(newFavs);
    newFavs.forEach(function(newFav) {
      item = "<li>" + newFav + "</li>";
      $("#yourList").prepend(item);
    });
    // console.log(yrList.join());
    // $("#yourList").text(yrList.join());
    event.preventDefault();
  });



});
