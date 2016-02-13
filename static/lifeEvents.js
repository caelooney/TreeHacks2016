function initMap() {

  // Specify where the map is centered
  // Defining this variable outside of the map optios markers
  // it easier to dynamically change if you need to recenter
  var myLatLng = {lat: 72, lng: -140};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('oneEvent-map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 5,
    zoomControl: true,
    panControl: false,
    streetViewControl: false,
    styles: MAPSTYLES,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var infoWindow = new google.maps.InfoWindow({
      width: 150
  });

  // Retrieving the information with AJAX
  function updateMap() {

    LifeEvents = '{"1":{"oneEventId":"1","capLat":"70.71139573","capLong":"-147.8381939","Year":"2001", "Month":"10", "Day":"1", "eventType":"House party","members":"Beyonce, Solange, Jay-z, Blue Ivy"}}'
  
      var oneEvent, marker, html;

      for (var key in LifeEvents) {
          oneEvent = LifeEvents[key];

          // Define the marker
          marker = new google.maps.Marker({
              position: new google.maps.LatLng(oneEvent.capLat, oneEvent.capLong),
              map: map,
              title: 'oneEvent ID: ' + oneEvent.oneEventId,
              icon: '/static/img/corgi.png'
          });

          // Define the content of the infoWindow
          html = (
              '<div class="window-content">' +
                  '<img src="/static/img/corgi.jpg" alt="lifeEvent" style="width:150px;" class="thumbnail">' +
                  '<p><b>Event members: </b>' + oneEvent.members + '</p>' +
                  '<p><b>Year: </b>' + oneEvent.Year + '</p>' +
                  '<p><b>Month: </b>' + oneEvent.Month + '</p>' +
                  '<p><b>Day: </b>' + oneEvent.Day + '</p>' +
                  '<p><b>Event Type: </b>' + oneEvent.eventType + '</p>' +
                  '<p><b>Location: </b>' + marker.position + '</p>' +
              '</div>');

          // Inside the loop we call bindInfoWindow passing it the marker,
          // map, infoWindow and contentString
          bindInfoWindow(marker, map, infoWindow, html);
      }
    };


  // This function is outside the for loop.
  // When a marker is clicked it closes any currently open infowindows
  // Sets the content for the new marker with the content passed through
  // then it open the infoWindow with the new content on the marker that's clicked
  function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.close();
          infoWindow.setContent(html);
          infoWindow.open(map, marker);
      });
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
