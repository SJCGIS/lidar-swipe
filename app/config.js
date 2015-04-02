define(['esri/InfoTemplate',
        'esri/geometry/Point',
        'esri/SpatialReference'], function(InfoTemplate, Point, SpatialReference) {
  return {

    portalUrl: 'http://www.arcgis.com',

    mapControls: {
      // **********************************************
      // Example configuration when using a webmap
      // **********************************************

      // example web maps:
      // Portland Bike Map example from Boostrap Map demo pages, see
      // http://esri.github.io/bootstrap-map-js/demo/dojo/webmap.html
      // itemId: '8e42e164d4174da09f61fe0d3f206641',

      // SoCal running trails
      // GPX tracks embeded in web map as feature collections
      // itemId: 'cbb968b3854e4e4fac3f95c30ca41b38',

      // Los Angeles Bike Paths - KML layer of bike paths
      // itemId: '78ca84d1f2534d3496e63fa80240d4f3',

      // web maps from ArcGIS JSAPI sample pages
      // NOTE: both require a dijit theme (i.e. claro)
      // to support the dojox/charting dijits in the popups

      // Tapastry Segments - dynamic map servce w/ dojox/chart in popup
      // itemId: '4778fee6371d4e83a22786029f30c7e1',

      // mobile web map example, see:
      // https://developers.arcgis.com/javascript/jssamples/mobile_arcgis.html
      // itemId: '1e79439598494713b553f990a4040886',

      // NOTE: this is the options sent to arcgisUtils.createMap()
      // see: https://developers.arcgis.com/javascript/jsapi/esri.arcgis.utils-amd.html#createmap
      // options: {
      //   mapOptions: {
      //     basemap: 'topo',
      //     sliderPosition: 'bottom-right'
      //   }
      // },

      // **********************************************
      // Example configuration when NOT using a webmap
      // and loading layers from the settings in this config
      // **********************************************

      // NOTE: this is the options sent to new Map()
      // see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
      options: {
        sliderPosition: 'bottom-right',
        maxScale: 4800,
        center: new Point(1126892, 580329, new SpatialReference({'wkid': 102748}))
      },

      operationalLayers: [{
        type: 'tiled',
        url: 'http://sjcgis.org/arcgis/rest/services/Elevation/LiDAR_DEM_2013_Hillshade/ImageServer',
        title: 'lidar',
        options: {
          id: 'lidar',
          visible: true
        }
      }, {
        type: 'tiled',
        url: 'http://sjcgis.org/arcgis/rest/services/Basemaps/Aerial_Basemap/MapServer',
        title: 'aerial',
        options: {
          id: 'aerial',
          visible: true
        }
      }],

      // TODO: add basemaps
      // basemaps: {},

      // Add config parameters for each map widget you want to include
      // The map reference will get appended to the options
      // To accept default options just pass empty object {}
      // NOTE: to change the position of these widgets, make changes in map.css
      widgets: {
        scalebar: {
          // see https://developers.arcgis.com/javascript/jsapi/scalebar-amd.html#scalebar1
        },
        homeButton: {
          // see: https://developers.arcgis.com/javascript/jsapi/homebutton-amd.html#homebutton1
        },
        locateButton: {
          // see: https://developers.arcgis.com/javascript/jsapi/locatebutton-amd.html#locatebutton1
        },
        geocoder: {
          // see https://developers.arcgis.com/javascript/jsapi/geocoder-amd.html#geocoder1
          autoComplete: true,
          arcgisGeocoder: false,
          highlightLocation: true,
          zoomScale: 1200,
          geocoders: [{
            url: 'http://sjcgis.org/arcgis/rest/services/Tools/Polaris_Geolocator/GeocodeServer',
            name: 'SJC Geocoder',
            singleLineFieldName: 'SingleLine'
          }],
          'class': 'geocoder'
        },
        layerSwipe: {
          layerIds: ['lidar']
        }
      }
    },

    // about modal
    aboutModal: {
      moreInfoUrl: 'http://en.wikipedia.org/wiki/Lidar'
    }
  };
});
