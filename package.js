Package.describe({
  name: 'up:fview-fmap',
  version: '0.0.1',
  summary: 'IjzerenHein\'s awesome famous-map for famous-views',
  git: '',
  //documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('gadicohen:famous-views@0.1.32', 'client');

  // custom require/define funcs
  api.addFiles('lib/pre.js', 'client');

  // ALWAYS copy this exactly into pre.js on update.  for now.
  var modules = [
    'MapModifier',
    'MapPositionTransitionable',
    'MapStateModifier',
    'MapTransition',
    'MapUtility',
    'MapView'
  ];

  for (var i=0; i < modules.length; i++)
    api.addFiles('lib/famous-map/' + modules[i] + '.js', 'client');

  // famous-views wrappers for famous-fmap
  api.addFiles([
    'lib/MapView.js',
    'lib/MapModifier.js',
    'lib/MapStateModifier.js'
  ], 'client');

  api.export('Fmap', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gadicohen:fview-fmap');
});
