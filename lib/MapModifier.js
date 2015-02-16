FView.registerModifier("MapModifier", Fmap.MapModifier, {
  create: function(options) {
    var mapViewId = options.map;
    var mapView = FView.byId(mapViewId);
    if (!mapView) {
      throw new Error("Can't find MapView, map id is: " + mapViewId);
    }

    options = _.extend({
        position:       {lat: 51.4484855, lng: 5.451478},
        offset:         {lat: 0, lng: 0},
        rotateTowards:  {lat: 0, lng: 0},
        zoomBase:       5,
        zoomScale:      0.5
      }, options);
    options.mapView = mapView;

    var mapModifier = new this._modifier.constructornew(options);

    return mapModifier;
  },
  attrUpdate: function(key, value, oldValue, data, firstTime) {
    //TODO
  }
});
