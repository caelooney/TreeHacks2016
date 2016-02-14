function initMap() {

  // Specify where the map is centered
  // Defining this variable outside of the map optios markers
  // it easier to dynamically change if you need to recenter
  var myLatLng = {lat: 72, lng: -140};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('lifeEvent-map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 5,
    zoomControl: true,
    panControl: false,
    streetViewControl: false,
    // styles: MAPSTYLES,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var infoWindow = new google.maps.InfoWindow({
      width: 150
  });

  // var styledMap = new google.maps.StyledMapType(
  //     MAPSTYLES,
  //     {name: "Custom Style"}
  // );

  updateMap();

  function updateMap() {

    LifeEvents = {"1":{"oneEventId":"1","capLat":"37.7833","capLong":"-122.4167","Year":"2001", "Month":"10", "Day":"1", "eventType":"House party","members":"Beyonce, Solange, Jay-z, Blue Ivy"}}
  
    // LifeEvents = {"1":{"oneEventId":"1","capLat":"37.7833","capLong":"-122.4167","Year":"2001", "Month":"10", "Day":"1", "eventType":"First child","members":"Beyonce, Solange, Jay-z, Blue Ivy"}},
    //           {"2":{"oneEventId":"2","capLat":"9.02848","capLong":"20.17261","Year":"2011", "Month":"8", "Day":"1", "eventType":"Wedding","members":"Beyonce, Solange, Jay-z, Blue Ivy"}},
    //           {"3":{"oneEventId":"3","capLat":"-23.97294","capLong":"-56.44329","Year":"3001", "Month":"5", "Day":"1", "eventType":"Engagement","members":"Beyonce, Solange, Jay-z, Blue Ivy"}},
    //           {"4":{"oneEventId":"4","capLat":"2.69982","capLong":" -60.27622","Year":"2021", "Month":"1", "Day":"1", "eventType":"Graduation","members":"Beyonce, Solange, Jay-z, Blue Ivy"}},
    //           {"5":{"oneEventId":"5","capLat":"-14.71794","capLong":"26.22664","Year":"2681", "Month":"9", "Day":"1", "eventType":"Renewing vows","members":"Beyonce, Solange, Jay-z, Blue Ivy"}},
    //           {"6":{"oneEventId":"6","capLat":"20.19324","capLong":"22.72833","Year":"2761", "Month":"12", "Day":"1", "eventType":"Honeymoon","members":"Beyonce, Solange, Jay-z, Blue Ivy"}}

      var oneEvent, marker, html;

      for (var key in LifeEvents) {
          oneEvent = LifeEvents[key];

          console.log(key);


         marker = new google.maps.Marker({
              position: new google.maps.LatLng(oneEvent.capLat, oneEvent.capLong),
              map: map,
              title: 'oneEvent ID: '
              // icon: 'static/img/corgi.png'
          });

          // console.log("post");

          // Define the content of the infoWindow
          html = (
              '<div class="window-content">' +
                  '<img src="static/img/corgi.png" alt="lifeEvent" style="width:150px;" class="thumbnail">' +
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
