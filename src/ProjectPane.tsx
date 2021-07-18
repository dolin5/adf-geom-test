import Graphic from '@arcgis/core/Graphic';
import React from 'react';


const ProjectPane = ({projects,onProjectClick}:{projects?:Graphic[],onProjectClick:(graphic:Graphic)=>void})=>{

    return <div style={{position:'absolute',top:20,bottom:20,left:20,width:350, zIndex:1000, 
        background:'white', display:'flex', flexDirection:'column', overflowY:'scroll'}}>
        {projects?.map((project,i)=>{
            return <div style={{height:80, padding:20, display:'flex',flexDirection:'column', justifyContent:'space-around', flexShrink:0, borderBottom:'1px solid black', color:'black'}} key={i} onClick={()=>onProjectClick(project)}>
                <h3>{project.attributes['PlantingProjectName']}</h3>
                <p>{project.attributes['PlantingProjectID']}</p>
            </div>
        })}
    </div>

}

export default ProjectPane;