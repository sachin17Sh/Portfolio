import JS from "../../assets/images/skills/JS.svg";
import CSS from "../../assets/images/skills/CSS.svg";
import HTML from "../../assets/images/skills/HTML.svg";
import Bootstrap from "../../assets/images/skills/bootstrap.svg";
import Mongo from "../../assets/images/skills/Mongo.svg";
import Sass from "../../assets/images/skills/Sass.svg";
import ReactImg from "../../assets/images/skills/React.svg";
import GIT from "../../assets/images/skills/git.svg";
import Redux from "../../assets/images/skills/Redux.svg";
import Wordpress from "../../assets/images/skills/Wordpress.svg";
import { MUI_C } from "../../lib/materialUI";
import SkilData from "./SkilData";
import Next from "../../assets/images/skills/Next.svg"
import "../../assets/css/Skills.css";

export default function Skills() {
  return (
    <>
      <MUI_C.Box className="skillsContainer">
        <MUI_C.Container className="skillSection-1">
          <h2>Using Now:</h2>
          <MUI_C.Grid container spacing={2}>
            {[{ img: HTML, name: 'HTML' }, { img: CSS, name: 'CSS' },
            { img: Bootstrap, name: 'Bootstrap' }, { img: Sass, name: 'Sass' },
            { img: JS, name: 'JS' }, { img: ReactImg, name: 'React' },
            { img: GIT, name: 'Git' }, { img: Redux, name: 'Redux Toolkit' }].map((skill, index) => (
              <MUI_C.Grid item xs={6} sm={4} md={3} key={index}>    {/* xs => extra small grid will by in 2 parts /// sm => small grid will by in 3 parts/// md => medium grid will be divided in 4 parts */}
                <SkilData id="skill-item" >
                  <img src={skill.img} alt={skill.name} className="skillImage scaleIn" />
                  <h4>{skill.name}</h4>
                </SkilData>
              </MUI_C.Grid>
            ))}
          </MUI_C.Grid>
        </MUI_C.Container>

        <MUI_C.Container className="skillSection-2">
          <h2>Learning:</h2>
          <MUI_C.Grid container spacing={2}>
            {[{ img: Mongo, name: 'mongoDB' },
            { img: Wordpress, name: 'Wordpress' },
            { img: Next, name: 'Next.JS' }].map((skill, index) => (
              <MUI_C.Grid item xs={6} sm={4} md={3} key={index} className="skillImage scaleIn" >
                <SkilData id="skill-item">
                  <img src={skill.img} alt={skill.name} />
                  <h4>{skill.name}</h4>
                </SkilData>
              </MUI_C.Grid>
            ))}
          </MUI_C.Grid>
        </MUI_C.Container>
      </MUI_C.Box>
    </>
  );
}
