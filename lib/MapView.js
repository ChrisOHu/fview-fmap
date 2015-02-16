FView.registerView('MapView', Fmap.MapView, {
  create: function(options) {
    options = _.extend(
      {
	      type: MapView.MapType.LEAFLET,
        mapOptions: {
          zoom: 3,
          center: {lat: 51.4484855, lng: 5.451478}
        },
      },
      options);

    var node = new this._view.constructor(options);

    // auto pipe to a parent ContainSurface
    if (this.parent._view && this.parent._view.name === 'ContainerSurface')
      this.parent.view.pipe(node);

    return node;
  },
  attrUpdate: function(key, value, oldValue, data, firstTime) {
    if (key === 'type') {
      //TODO
    } else if (key === 'mapOptions') {
      return this.view.setPosition(
        value.center,
        {duration: 5000, curve: Easing.outBack},
        function () {
          mapView.getMap().setZoom(value.zoom)
        }
      );
    }

    return undefined;
  }
});
