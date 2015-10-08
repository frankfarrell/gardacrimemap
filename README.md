# gardacrimemap
This is an quick attempt to make an interactive crime map by garda division where you can srcrub by year and offence and the map updates with rank by garda division that runs entirely in the browser. 

The data is from cso for 2003-2015. The px-axis format is converted to a flat json format using https://www.npmjs.com/package/px You can run the pxConverter.html script to get it from firebug:) 

This data is put into a Crossfilter multidimensional array. (This eats a fair bit of memory). 

The garda topo file was converted from cso.ie boundary shapefile using orge and mapshaper. Unfortunately the names of stations in the shapefile did not correspond exactly to names in PC-Axis file. I converted them manually in the geojson, feel free to use them.

The geojson is overlaid on the map with d3js and the colouring is the rank of crime where black is the worst and transparent is good. This updates as you scrub the crime type and year bar charts. Eg it is possible to find the worst garda station for weapons crime in 2007.

It would be nice to make it such that crime types arent ordered as in a bar chart (but not just checkboxes). 
It would also be possible to group by different hierarchies of garda division/county/district. Some sort of radial thing would be nice. 