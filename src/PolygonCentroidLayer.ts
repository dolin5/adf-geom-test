import React from 'react';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import * as watchUtils from '@arcgis/core/core/watchUtils.js';
import { useEffect } from 'react';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Renderer from '@arcgis/core/renderers/Renderer'

interface Props {
    view:MapView;
    url:string;
    renderer:Renderer
}


const PolygonCentroidLayer = ({view,url,renderer}:Props)=>{

    const dataLayer = new FeatureLayer({url});
    const drawnLayer = new FeatureLayer();

    dataLayer.when(()=>{
        watchUtils.whenTrue(view,'stationary',()=>{
            console.log('scale change')
        })
    })
  

}

export default PolygonCentroidLayer;