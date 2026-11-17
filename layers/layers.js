var wms_layers = [];

var format_AearoportsMaroc_0 = new ol.format.GeoJSON();
var features_AearoportsMaroc_0 = format_AearoportsMaroc_0.readFeatures(json_AearoportsMaroc_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AearoportsMaroc_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AearoportsMaroc_0.addFeatures(features_AearoportsMaroc_0);
cluster_AearoportsMaroc_0 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AearoportsMaroc_0
});
var lyr_AearoportsMaroc_0 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AearoportsMaroc_0, 
                style: style_AearoportsMaroc_0,
                popuplayertitle: 'Aearoports Maroc',
                interactive: true,
                title: '<img src="styles/legend/AearoportsMaroc_0.png" /> Aearoports Maroc'
            });
var group_Transports = new ol.layer.Group({
                                layers: [lyr_AearoportsMaroc_0,],
                                fold: 'open',
                                title: 'Transports'});

lyr_AearoportsMaroc_0.setVisible(true);
var layersList = [group_Transports];
lyr_AearoportsMaroc_0.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'Cap': 'Cap', });
lyr_AearoportsMaroc_0.set('fieldImages', {'Nom_fr': 'TextEdit', 'Nom_ar': 'TextEdit', 'iata': 'Hidden', 'Cap': 'TextEdit', });
lyr_AearoportsMaroc_0.set('fieldLabels', {'Nom_fr': 'inline label - always visible', 'Nom_ar': 'inline label - always visible', 'Cap': 'no label', });
lyr_AearoportsMaroc_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});