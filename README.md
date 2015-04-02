# LiDAR Swipe

LiDAR is an imagery method to create representations of Earth's surface. The LiDAR Swipe map is designed for users to view a bare earth hillshade image created from LiDAR data in San Juan County, WA. In this case, you can drag the swipe bar across the map to compare the 2013 aerial photos with the 2013 LiDAR hillshade.

[View it live](http://sjcgis.github.io/lidar-swipe]

![App Screenshot](https://raw.githubusercontent.com/sjcgis/lidar-swipe/master/lidar-swipe.gif)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Known Issues

- [ ] Max scale is 1:4800. Larger scales to become available as data is ready,

- [ ] Flat, grey buffer on hillshade around shorelines. Hillshades are not applicable over water, so this is a no data zone.

## Thanks
Special thanks to Tom Wayson, Allan Lafromboise, Ben Stoltz, and Arnaud Ferrand for their work on [dojo-bootstrap-map-js](https://github.com/Esri/dojo-bootstrap-map-js) from which this application is derived.

## Licensing
Copyright 2015 San Juan County GIS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/sjcgis/lidar-swipe/master/license.txt) file.
