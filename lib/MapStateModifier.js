FView.registerModifier("MapStateModifier", MapStateModifier, {
  create: function(options) {
    if (!this.parent._view || !this.parent._view.name != 'MapView') {
      throw new Error("MapStateModifier must be embedded inside a MapView for now");
    }

    options = _.extend({
        position:       {lat: 51.4484855, lng: 5.451478},
        offset:         {lat: 0, lng: 0},
        //rotateTowards:  {lat: 0, lng: 0},
        zoomBase:       5,
        zoomScale:      0.5
      }, options);
    options.mapView = this.parent.view;

    var mapStateModifier = new MapStateModifier(options);

    return mapStateModifier;
  },
  attrUpdate: function(key, value, oldValue, data, firstTime) {
    /*
     * position = { value:      LatLng,
     *              transition: {...},
     *              done:       function() {}
     *            }
     */
    var options = value;

    switch(key) {
      case 'position': 
        this.modifier.setPosition(
          options.value       || {lat: 0, lng: 0},
          options.transition  || {method: 'map-speed', speed: 200}, // 200 km/h
          options.done        || null
        );
        break;
    //TODO or done ?
    }
  }
});
