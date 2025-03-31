import { MUI_C } from "../../lib/materialUI"
import ReactConcepts from "../../assets/images/Projects/ReactConcept.png"
import Foodorder from "../../assets/images/Projects/Foodorder.jpg"
import PMTool from "../../assets/images/Projects/PMTool.png"
import ProjectCard from "./ProjectCard"
import "../../assets/css/Project.css"


export default function Projects() {
  return (
    <MUI_C.Box>
      <MUI_C.Container className="projectSection">
        <h1>MY WORK</h1>
        <MUI_C.Grid container spacing={2}>
          {[
            { img: ReactConcepts, name: 'React Basic Core-Concepts' },
            { img: Foodorder, name: 'Food Order App' },
            { img: PMTool, name: 'Task Management Tool' },
            
          ].map((project, index) => (
            <MUI_C.Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard id="project_item">
                <img src={project.img} alt={project.name} className="projectImage scaleIn"  />
                <h2>{project.name}</h2>
              </ProjectCard>
            </MUI_C.Grid>
          ))}
        </MUI_C.Grid>
      </MUI_C.Container>
    </MUI_C.Box>
  )
}
