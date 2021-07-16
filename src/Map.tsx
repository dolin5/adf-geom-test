import React, { useEffect, useRef } from 'react'
import MapView from '@arcgis/core/views/MapView'
import Map from '@arcgis/core/Map';

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



    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default ArcGISMap