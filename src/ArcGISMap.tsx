import React, { useEffect, useRef, useState } from 'react'
import MapView from '@arcgis/core/views/MapView'
import Map from '@arcgis/core/Map';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Polygon from '@arcgis/core/geometry/Polygon';
import Point from '@arcgis/core/geometry/Point';
import Graphic from '@arcgis/core/Graphic';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import Query from '@arcgis/core/tasks/support/Query';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import PolygonCentroidLayer from './PolygonCentroidLayer';

const platingProjectIDfield = "PlantingProjectID"

const dissolveBeyondScale = 4999999;

const ArcGISMap = ({setProjects,sendMapView, setGeoms}:{setProjects:any, sendMapView:(view:MapView)=>void, setGeoms:any})=>{    
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
        padding:{left:400},
        center:[-100,39]
      });

      sendMapView(view);

      view.popup.defaultPopupTemplateEnabled= true;

      const polygonRenderer = {
        type:'simple',
        symbol:{
        type:'simple-fill',
        outline: {           color: [0, 196, 0, 1] },
        color: [0, 196, 0, .25]}
      } as unknown as SimpleRenderer;

      const pointRenderer = {
        type:'simple',
        symbol:{
          type:'simple-marker',
          size:8,              
          outline: { color: [0, 196, 0, 1] },
          color: [0, 196, 0, .5]
        } 
      } as unknown as SimpleRenderer;

      const polygonLayer = new FeatureLayer({
        url:"https://gis-test.arborday.org/server/rest/services/CP_Showcase_MVP_Data_Polygon/FeatureServer/0",
        minScale:dissolveBeyondScale,
        renderer:polygonRenderer,
        outFields:['*']
      });

      const pointLayer = new FeatureLayer({
        url:"https://gis-test.arborday.org/server/rest/services/CP_Showcase_MVP_Data_Points/FeatureServer/0",
        objectIdField:'OBJECTID',
        renderer:pointRenderer, 
        minScale:dissolveBeyondScale,
        outFields:['*'],
        popupEnabled:true,
      });

      view.watch("scale",scale=>{
        polygonLayer.renderer = scale>=100000?pointRenderer:polygonRenderer
      })

      const projectQuery = {where:"1=1", outFields:[platingProjectIDfield,'PlantingProjectName','PlantingProjectType','CalendarYear','AcresRestored'], returnGeometry:false, returnDistinctValues:true} as Query;
      Promise.all([polygonLayer.queryFeatures(projectQuery),pointLayer.queryFeatures(projectQuery)]).then(r=>{      
        setProjects([...r[0].features,...r[1].features]);
        const polyQuery = {where:"PlantingProjectID IN ("+r[0].features.map(f=>f.attributes[platingProjectIDfield]).join(',')+")",outFields:['*'], returnGeometry:true} as Query
        const pointQuery = {where:"PlantingProjectID IN ("+r[1].features.map(f=>f.attributes[platingProjectIDfield]).join(',')+")",outFields:['*'], returnGeometry:true} as Query        

        Promise.all([polygonLayer.queryFeatures(polyQuery), pointLayer.queryFeatures(pointQuery)]).then(r=>{
          const polygonFeatures = r[0].features;
          const pointFeatures = r[1].features;
          setGeoms([...polygonFeatures,...pointFeatures]);
          const polygonCentroidGraphics = polygonFeatures.map(f=>{
            return new Graphic({attributes:f.attributes,geometry:(f.geometry as Polygon).centroid})
          })

          const mergedPoints = [...polygonCentroidGraphics, ...pointFeatures];
          const mergedArrays = createPPIDArray(mergedPoints);

          const dissolvedPoints:Graphic[] = Object.entries(mergedArrays).map(dissolvePoints);

          const popupTemplate = pointLayer.createPopupTemplate();
          popupTemplate.title= '{PlantingProjectName}'

        
          const fields = pointLayer.fields.filter(fpnt=>polygonLayer.fields.map(fplyg=>fplyg.name).includes(fpnt.name));

          const zoomedOutLayer = new FeatureLayer({
            source:dissolvedPoints, objectIdField:'OBJECTID',renderer:pointRenderer,
            maxScale:5000000,
            fields,
            popupTemplate
          });

          
          
          map.addMany([zoomedOutLayer]);
        } )   
     
      })
      map.addMany([polygonLayer,pointLayer]);


    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

const createPPIDArray= (features:Graphic[]): {[key: string]: Graphic[]}=>{
  const dict = {} as {[key: string]: Graphic[]};

  features.forEach(g=>{
    dict[g.attributes[platingProjectIDfield]] = dict[g.attributes[platingProjectIDfield]] || [];
    dict[g.attributes[platingProjectIDfield]].push(g);
  })
  return dict;  
}

const dissolvePoints = ([id,graphics]:[string,Graphic[]],index:number)=>{
  const attributes = JSON.parse(JSON.stringify(graphics[0].attributes));
  attributes['OBJECTID'] = index;
    const point = new Graphic({attributes})
    point.geometry = averagePointsGeom(graphics);
    return point;
}

const averagePointsGeom = (graphics:Graphic[]):Point=>{
    const x = graphics.reduce((sum,g)=>sum+(g.geometry as Point).x,0)/graphics.length;
    const y = graphics.reduce((sum,g)=>sum+(g.geometry as Point).y,0)/graphics.length;
    const spatialReference = graphics[0].geometry.spatialReference;
    return new Point({spatialReference,x,y});
}

const generatePopup = (feature:Graphic)=>{
  console.log(feature);
  return JSON.stringify(feature);
}


export default ArcGISMap