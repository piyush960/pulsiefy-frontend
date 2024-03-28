import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import { Feature, Map, Overlay, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';
import { useGeographic } from 'ol/proj';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import myImage from '/assets/icons/location-dot.png';
import yourlocation from '/assets/icons/yourlocation.png';
import useWindowDimensions from '../hooks/useWindowDimensions';

function MapWrapper({ hospitalCoords: hospital, userCoords: you }) {

    useGeographic();

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        })

        const iconFeature = new Feature({
          geometry: new Point(hospital),
          name: 'Hospital',
          population: 4000,
          rainfall: 500,
        });

        const iconStyle = new Style({
          image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: myImage,
          }),
        });
        
        iconFeature.setStyle(iconStyle);

        

        const vectorSource = new VectorSource({
            features: [iconFeature],
        });
        
        const vectorLayer = new VectorLayer({
          source: vectorSource
        })

        const iconFeature1 = new Feature({
          geometry: new Point(you),
          name: 'Your Location',
          population: 4000,
          rainfall: 500,
        });

        const iconStyle1 = new Style({
          image: new Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: yourlocation,
          }),
        });
        
        iconFeature1.setStyle(iconStyle1);

        

        const vectorSource1 = new VectorSource({
            features: [iconFeature1],
        });
        
        const vectorLayer1 = new VectorLayer({
          source: vectorSource1
        })

        const centerpoint = [(hospital[0]+you[0])/2, (hospital[1]+you[1])/2];


        // const element = useRef();

        // const popup = new Overlay({
        //   element: element,
        //   positioning: 'bottom-center',
        //   stopEvent: false,
        // });
        // map.addOverlay(popup);

        // let popover;
        // function disposePopover() {
        //   if (popover) {
        //     popover.dispose();
        //     popover = undefined;
        //   }
        // }
        // // display popup on click
        // map.on('click', function (evt) {
        //   const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        //     return feature;
        //   });
        //   disposePopover();
        //   if (!feature) {
        //     return;
        //   }
        //   popup.setPosition(evt.coordinate);
        //   popover = new bootstrap.Popover(element, {
        //     placement: 'top',
        //     html: true,
        //     content: feature.get('name'),
        //   });
        //   popover.show();
        // });

        // // change mouse cursor when over marker
        // map.on('pointermove', function (e) {
        //   const pixel = map.getEventPixel(e.originalEvent);
        //   const hit = map.hasFeatureAtPixel(pixel);
        //   map.getTarget().style.cursor = hit ? 'pointer' : '';
        // });
        // // Close the popup when the map is moved
        // map.on('movestart', disposePopover);

    const map = new Map({
      target: "map",
      layers: [osmLayer, vectorLayer, vectorLayer1],
      view: new View({
          center: centerpoint,
          zoom: 12,
        }),
    });
    return () => map.setTarget(null)
    }, []);

    const style = (width > 500) ? {height:'500px',width:'500px'} : {height:'280px',width:'280px'}

    return (
      <>
        <div style={style} id="map" className="map-container" />
        {/* <div id="popup" ref={element}></div> */}
      </>
    );
}

export default MapWrapper;