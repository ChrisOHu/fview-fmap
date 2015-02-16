FView.registerModifier("MapStateModifier", Fmap.MapStateModifier, {
  create: function(options) {
    var mapViewId = options.map;
    var mapView = FView.byId(mapViewId);
    if (!mapView) {
      throw new Error("Can't find MapView, map id is: " + mapViewId);
    }

    options = _.extend({
        position:       {lat: 51.4484855, lng: 5.451478},
        offset:         {lat: 0, lng: 0},
        //rotateTowards:  {lat: 0, lng: 0},
        zoomBase:       5,
        zoomScale:      0.5
      }, options);
    options.mapView = mapView;

    var mapStateModifier = new this._modifier.constructor(options);

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
