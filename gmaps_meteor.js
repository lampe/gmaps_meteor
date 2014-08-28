if (Meteor.isClient) {
  Template.hello.rendered = function(){
      var map;
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
