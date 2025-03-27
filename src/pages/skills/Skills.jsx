import JS from "../../assets/images/skills/JS.svg"
import CSS from "../../assets/images/skills/CSS.svg"
import HTML from "../../assets/images/skills/HTML.svg"
import Bootstrap from "../../assets/images/skills/bootstrap.svg"
import Mongo from "../../assets/images/skills/Mongo.svg"
import Sass from "../../assets/images/skills/Sass.svg"
import ReactImg from "../../assets/images/skills/React.svg"
import GIT from "../../assets/images/skills/git.svg"
import Wordpress from "../../assets/images/skills/Wordpress.svg"
import { MUI_C } from "../../lib/materialUI"
import SkilData from "./SkilData"
import "../../assets/css/Skills.css"

export default function Skills() {
  return (
    <>
      <MUI_C.Box className="skillsContainer">
        <MUI_C.Container className="skillSection-1">
          <h2>Using Now:</h2>
          <MUI_C.Grid container spacing={2} >
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item">
                <img src={HTML} />
                <h4>HTML</h4>
              </SkilData>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item" >
                <img src={CSS} />
                <h4>CSS</h4>
              </SkilData>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item" >
                <img src={Bootstrap} />
                <h4>Bootstrap</h4>
              </SkilData>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item" >
                <img src={Sass} />
                <h4>Sass</h4>
              </SkilData>
            </MUI_C.Grid>
          </MUI_C.Grid>
          <MUI_C.Grid container spacing={2}>
            <MUI_C.Grid item xs={3}>
              <SkilData  id="skill-item" >
                <img src={JS} />
                <h4>JS</h4>
              </SkilData>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item" >
                <img src={ReactImg} />
                <h4>React</h4>
              </SkilData>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item">
                <img src={GIT} />
                <h4>Git</h4>
              </SkilData>
            </MUI_C.Grid>
          </MUI_C.Grid>
        </MUI_C.Container>
        <MUI_C.Container className="skillSection-2">
          <h2>Learning:</h2>

          <MUI_C.Grid container spacing={2}>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item" >
                <img src={Mongo} />
                <h4>mongoDB</h4>
              </SkilData>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={3}>
              <SkilData id="skill-item" >
                <img src={Wordpress} />
                <h4>Wordpress</h4>
              </SkilData>
            </MUI_C.Grid>
          </MUI_C.Grid>

        </MUI_C.Container>
      </MUI_C.Box>
    </>
  )
}
