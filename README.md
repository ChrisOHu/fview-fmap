# fview-fmap

IjzerenHein's awesome famous-map plugin for meteor-famous-view.

## Usage:

```
<template name="map">
{{#MapView mapOptions=options id="mapView"}}
  {{#MapModifier map="mapView" zoomBase=2}}
  {{/MapModifier}}
{{/MapView}}
</template>
```

In JS you can get the MapView object like this:
```
Template.map.rendered = function() {
  var mapView = FView.from(this).view;
  //OR
  var sameMap = FView.byId('mapView').view;
}
```

## Notes

  1. This plugin is written in the style of @gadicc's fview-flex, the require & define is customized, kinda hacky, but I don't know if there's a better option;
  2. Only supports leaflet;
