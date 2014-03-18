FusionTable-Map-2-layers
========================

Live demo at http://jackdougherty.github.io/FusionTable-Map-2-layers

Search-and-Filter Map (with 2 layers: points and polygons) that draws data from Google Fusion Tables, based on template customized by Derek Eder http://derekeder.com/searchable_map_template/

Use this Google Fusion Tables template if you wish to create a 2-layer map (both points and polygons), where you can turn individual layers on/off, and search-and-filter results. Also, the point map includes a textual legend (A, B, C), with option to switch to numeric (0-100) values.

Basic steps:

1) Use Google Fusion Tables to create your point and polygon map layers. For the point map, change feature styles (select column and range for marker color and size).

2) Make your own copy of this template: either Fork to your own GitHub account, or Clone in Desktop, or Download a ZIP compressed version to your desktop.

3) Modify two files, following instructions in the code comments, to match your Google Fusion Table data:

- index.html
- maps_lib.js (located inside the js folder)

3) Host everything on the web (such as a GitHub repository gh-pages branch)

Learn more in an open-access Data Visualization book-in-progress by Jack Dougherty at Trinity College CT
http://epress.trincoll.edu/dataviz
