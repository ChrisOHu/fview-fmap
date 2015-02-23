FView.registerView('MapView', Fmap.MapView, {
  create: function(options) {
    options = _.extend(
      {
	      type: Fmap.MapView.MapType.LEAFLET,
        mapOptions: {
          zoom: 3,
          center: {lat: 51.4484855, lng: 5.451478},
          //FIXME: zoom buttons doesnt work well
          zoomControl: false,
        },
      },
      options);

    var node = new this._view.constructor(options);

    //node is of type MapView
    node.on('load', function () {
      // Add Leaflet tile-layer
      if (options.type === Fmap.MapView.MapType.LEAFLET) {
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
                    //maxZoom: 18
                    })
                    .addTo(node.getMap());
      }
    });

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
  },
});
