$(document).ready(function() {
  $('.btn-voyage').on('click', function(e) {
    var src = "https://produitsvoyageurs.wufoo.com/embed/r1nfouc70sf5k4q/";
    var height = 1211;
    var width = 800;

    $("#voyageFormDialog iframe").attr({'src':src,'height': height, 'width': width});
    $('#voyageFormDialog').modal({show:true});
  });

  $('.btn-cmd').on('click', function(e) {
    var src = "https://produitsvoyageurs.wufoo.com/embed/suv5izp0f8o6yn/";
    var height = 574;
    var width = 800;

    $("#orderFormDialog iframe").attr({'src':src,'height': height, 'width': width});
    $('#orderFormDialog').modal({show:true});
  });
});
