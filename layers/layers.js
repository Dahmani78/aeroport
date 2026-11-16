var wms_layers = [];

var format_LimitesMaroc_0 = new ol.format.GeoJSON();
var features_LimitesMaroc_0 = format_LimitesMaroc_0.readFeatures(json_LimitesMaroc_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMaroc_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMaroc_0.addFeatures(features_LimitesMaroc_0);
var lyr_LimitesMaroc_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMaroc_0, 
                style: style_LimitesMaroc_0,
                popuplayertitle: 'Limites Maroc',
                interactive: true,
                title: '<img src="styles/legend/LimitesMaroc_0.png" /> Limites Maroc'
            });
var format_RegionsMaroc_1 = new ol.format.GeoJSON();
var features_RegionsMaroc_1 = format_RegionsMaroc_1.readFeatures(json_RegionsMaroc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionsMaroc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionsMaroc_1.addFeatures(features_RegionsMaroc_1);
var lyr_RegionsMaroc_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionsMaroc_1, 
                style: style_RegionsMaroc_1,
                popuplayertitle: 'Regions Maroc',
                interactive: true,
                title: '<img src="styles/legend/RegionsMaroc_1.png" /> Regions Maroc'
            });
var format_AearoportsMaroc_2 = new ol.format.GeoJSON();
var features_AearoportsMaroc_2 = format_AearoportsMaroc_2.readFeatures(json_AearoportsMaroc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AearoportsMaroc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AearoportsMaroc_2.addFeatures(features_AearoportsMaroc_2);
cluster_AearoportsMaroc_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AearoportsMaroc_2
});
var lyr_AearoportsMaroc_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AearoportsMaroc_2, 
                style: style_AearoportsMaroc_2,
                popuplayertitle: 'Aearoports Maroc',
                interactive: false,
                title: '<img src="styles/legend/AearoportsMaroc_2.png" /> Aearoports Maroc'
            });
var group_Transports = new ol.layer.Group({
                                layers: [lyr_AearoportsMaroc_2,],
                                fold: 'open',
                                title: 'Transports'});
var group_Limites = new ol.layer.Group({
                                layers: [lyr_LimitesMaroc_0,lyr_RegionsMaroc_1,],
                                fold: 'open',
                                title: 'Limites'});

lyr_LimitesMaroc_0.setVisible(true);lyr_RegionsMaroc_1.setVisible(true);lyr_AearoportsMaroc_2.setVisible(true);
var layersList = [group_Limites,group_Transports];
lyr_LimitesMaroc_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_RegionsMaroc_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_AearoportsMaroc_2.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'Cap': 'Cap', });
lyr_LimitesMaroc_0.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr_RegionsMaroc_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Nom_Region': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Non_ar': 'TextEdit', });
lyr_AearoportsMaroc_2.set('fieldImages', {'Nom_fr': 'TextEdit', 'Nom_ar': 'TextEdit', 'iata': 'Hidden', 'Cap': 'TextEdit', });
lyr_LimitesMaroc_0.set('fieldLabels', {'OBJECTID': 'no label', });
lyr_RegionsMaroc_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'CODE_REGIO': 'no label', 'Nom_Region': 'inline label - always visible', 'Population': 'inline label - always visible', 'Menages': 'no label', 'Etrangers': 'no label', 'Marocains': 'no label', 'Non_ar': 'no label', });
lyr_AearoportsMaroc_2.set('fieldLabels', {'Nom_fr': 'inline label - always visible', 'Nom_ar': 'inline label - always visible', 'Cap': 'no label', });
lyr_AearoportsMaroc_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});