define([
  'dojo/query',
  'dojo/dom',
  'dojo/dom-class',
  'dojo/dom-style',
  'dojo/topic',

  './config',
  './mapping/MapControls',
  './layout/NavBar',
  './layout/AboutModal',

  'dojo-bootstrap/Modal',

  'dojo/domReady!'],
function(
  query, dom, domClass, domStyle, topic,
  config, MapControls, NavBar, AboutModal
) {
  'use strict';
  var app = {};

  // start map
  app.mapControls = new MapControls(config.mapControls, 'mapControls');
  app.mapControls.startup();

  // start nav
  app.navBar = new NavBar({}, 'navBar');
  app.navBar.startup();

  // start about modal
  app.aboutModal = new AboutModal(config.aboutModal, 'aboutModal');
  app.aboutModal.startup();

  // show the about modal
  topic.subscribe('about/show', function() {
    query('.about-modal').modal('show');
  });

  return app;
});
