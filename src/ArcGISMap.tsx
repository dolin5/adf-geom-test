import React, { useEffect, useRef } from 'react'
import MapView from '@arcgis/core/views/MapView'
import Map from '@arcgis/core/Map';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Polygon from '@arcgis/core/geometry/Polygon';
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';

const ArcGISMap = ()=>{
    
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const map = new Map({
        basemap: "streets-vector"

      });

      const view = new MapView({
        container: mapDiv.current!,
        map,
        zoom:3,
        center:[-100,39]
      });

      const polygonLayer = new FeatureLayer({
        url:"https://gis-test.arborday.org/server/rest/services/Planting_Project_Location___Polygon/MapServer/0"
      });

      polygonLayer.queryFeatures({where:"1=1", outFields:['*'], returnGeometry:true }).then(r=>{
        const extents = []
        const projectArrays: {[key: string]: Graphic[]} = {};
        const graphics = r.features.map(f=>{
          return new Graphic({attributes:f.attributes,geometry:(f.geometry as Polygon).centroid})
        })
        graphics.forEach(g=>{
          projectArrays[g.attributes['PlantingProjectID']] = projectArrays[g.attributes['PlantingProjectID']] || [];
          projectArrays[g.attributes['PlantingProjectID']].push(g);
        })

        const zoomedOutPoints:Graphic[] = [];

        Object.entries(projectArrays).forEach(([id,graphics],index)=>{
          const point = new Graphic({attributes:{'PlantingProjectID':id,'OBJECTID': index}})
          const x = graphics.reduce((sum,g)=>sum+(g.geometry as Point).x,0)/graphics.length;
          const y = graphics.reduce((sum,g)=>sum+(g.geometry as Point).y,0)/graphics.length;
          const spatialReference = graphics[0].geometry.spatialReference;
          point.geometry = new Point({spatialReference,x,y});
          zoomedOutPoints.push(point)
        })

        const pointRenderer = {
          type:'simple',
          symbol:{
            type:'simple-marker',
            size:8,              
            outline: { style: "none", width: 0 },
            color: [0, 196, 0, 1]
          } 
        } as unknown as SimpleRenderer;

        const zoomedOutLayer = new FeatureLayer({
          source:zoomedOutPoints, objectIdField:'OBJECTID',renderer:pointRenderer,
          maxScale:5000000      
        });


        const middleLayer = new FeatureLayer({
          source:graphics, objectIdField:'OBJECTID', renderer:pointRenderer,minScale:4999999,maxScale:100000
        })

        const polyRenderer = {
          type:'simple',
          symbol:{
          type:'simple-fill',
          outline: {           color: [0, 196, 0, 1] },
          color: [0, 196, 0, .25]}
        } as unknown as SimpleRenderer
        const polygonLayer = new FeatureLayer({source:r.features,objectIdField:'OBJECTID',renderer:polyRenderer, minScale:99999})

        map.addMany([zoomedOutLayer,middleLayer,polygonLayer]);
      })



      // const drawnLayer = new FeatureLayer({
      //   feat
      // })

      // map.add(polygonLayer);

      



    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default ArcGISMap