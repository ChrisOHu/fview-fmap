FView.registerModifier("MapModifier", MapModifier, {
  create: function(options) {
    if (!this.parent._view || !this.parent._view.name != 'MapView') {
      throw new Error("MapModifier must be embedded inside a MapView for now");
    }

    options = _.extend({
        position:       {lat: 51.4484855, lng: 5.451478},
        offset:         {lat: 0, lng: 0},
        rotateTowards:  {lat: 0, lng: 0},
        zoomBase:       5,
        zoomScale:      0.5
      }, options);
    options.mapView = this.parent.view;

    var mapModifier = new MapModifier(options);

    return mapModifier;
  },
  attrUpdate: function(key, value, oldValue, data, firstTime) {
    //TODO
  }
});
