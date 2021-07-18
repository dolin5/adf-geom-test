import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ArcGISMap from './ArcGISMap'
import Graphic from '@arcgis/core/Graphic';
import ProjectPane from './ProjectPane';
import MapView from '@arcgis/core/views/MapView';

function App() {
  const mapRef = useRef();

  const [view,setView]=useState<MapView>();

  const [projects,setProjects] = useState<Graphic[]>();
  const [geoms,setGeoms ] = useState<any>();
  const getMapView = (view:MapView)=>{    
    setView(view);
  }

  const onProjectClick = (project:Graphic)=>{
    view?.goTo(geoms.filter((g:Graphic)=>{return g.attributes['PlantingProjectID']==project.attributes['PlantingProjectID']}));
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ProjectPane projects={projects} onProjectClick={onProjectClick}></ProjectPane>
      <ArcGISMap sendMapView={getMapView} setProjects={setProjects} setGeoms={setGeoms}></ArcGISMap>
    </div>
  );
}

export default App;
