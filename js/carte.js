$('#type').val('liste');
var vin1 = {
  info: '<strong>Chinon</strong><br>Raphaëlle propose du Chinon, un Val de Loire de Tourraine, le domaine Charles Pain. Elle propose ce vin car elle trouve que c\'est un vin qui vaut bien un vin à 10€ et que les vins de Loire sont des vins agréables qu\'elle a en vie de faire découvrir. <br />Rouge cuvée Domaine (vin gourmand, fruité, la fraicheur de la Loire): 5,60€ (tous frais inclus)<br><a href="index.html#about">COMMANDER</a>',
  lat: 47.160370,
  long: 0.226581,
  type: 'vin'
};

var vin2 = {
  info: '<strong>Vin rouge cépage Mollard</strong><br>Aline a fait découvrir le vin Mémoire neuve du <a href="http://www.vins-des-alpes-du-sud.fr/hautes-alpes/domaine-du-petit-aout" target="_blank">domaine Petit Août</a>. <br> C\'est un vin 100% Mollard, un cépage ancien des Hautes Alpes.<br><a href="index.html#about">Commande terminée</a>',
  lat: 43.775071,
  long: 5.721412,
  type: 'vin'
};

var huile1 = {
  info: '<strong>Huile d\'olive</strong><br>Muriel a rapporté de l\'huile d\'olive du Portugal, d\'une petite production en agriculture raisonnée.<br><a href="index.html#about">Commande terminée</a>',
  lat: 37.753830,
  long: -7.689763,
  type: 'huile'
};

var locations = [
  [vin1.info, vin1.lat, vin1.long, 0, vin1.type],
  [vin2.info, vin2.lat, vin2.long, 1, vin2.type],
  [huile1.info, huile1.lat, huile1.long, 2, huile1.type]
];

/* Pour cacher ou afficher les marqueurs                  */
/* toChange : tableau des marqueurs                       */
/* show : true (affiche les marqueurs), false (les cache) */
var hideOrShowMarkers = function(toChange, show) {
  $.each(toChange, function(i) {
    toChange[i].setVisible(show)
  })
}

function initMap() {

  console.clear()
  var map = new google.maps.Map($('#map')[0], {
    zoom: 5,
    center: new google.maps.LatLng(46.349250, 4.416117),
    mapTypeId: google.maps.MapTypeId.HYBRID,
    scrollwheel: false
  });

  var infowindow = new google.maps.InfoWindow({});
  var marker, i;
  var charcuteries = [];
  var confitures = [];
  var huiles = [];
  var vins = [];
  var patisseries = [];

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    switch (locations[i][4]) {
      case 'charcuterie':
        charcuteries.push(marker);
        break;
      case 'confiture':
        confitures.push(marker);
        break;
      case 'huile':
        huiles.push(marker);
        break;
      case 'vin':
        vins.push(marker);
        break;
      case 'patisserie':
        patisseries.push(marker);
        break;

    }

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
      setMapOnAll(null);
    }
  }

  $('#type').change(function() {
    var toHide,
      type = $(this).val();

    infowindow.close()

    switch (type) {
      case 'vin':
        hideOrShowMarkers(vins, true)
        hideOrShowMarkers(patisseries, false)
        hideOrShowMarkers(huiles, false)
        hideOrShowMarkers(charcuteries, false)
        hideOrShowMarkers(confitures, false)
        break;
      case 'patisserie':
        hideOrShowMarkers(patisseries, true)
        hideOrShowMarkers(vins, false)
        hideOrShowMarkers(huiles, false)
        hideOrShowMarkers(charcuteries, false)
        hideOrShowMarkers(confitures, false)
        break;
      case 'charcuterie':
        hideOrShowMarkers(charcuteries, true)
        hideOrShowMarkers(vins, false)
        hideOrShowMarkers(patisseries, false)
        hideOrShowMarkers(huiles, false)
        hideOrShowMarkers(confitures, false)
        break;
      case 'confiture':
        hideOrShowMarkers(confitures, true)
        hideOrShowMarkers(vins, false)
        hideOrShowMarkers(patisseries, false)
        hideOrShowMarkers(charcuteries, false)
        hideOrShowMarkers(huiles, false)
        break;
      case 'huile':
        hideOrShowMarkers(huiles, true)
        hideOrShowMarkers(vins, false)
        hideOrShowMarkers(patisseries, false)
        hideOrShowMarkers(charcuteries, false)
        hideOrShowMarkers(confitures, false)
        break;
      case '':
        hideOrShowMarkers(vins, true)
        hideOrShowMarkers(patisseries, true)
        hideOrShowMarkers(confitures, true)
        hideOrShowMarkers(charcuteries, true)
        hideOrShowMarkers(huiles, true)
        break;
    }
  })
}
