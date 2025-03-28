  import { MUI_C } from "../lib/materialUI";
  import Dev from "../assets/images/about/Dev.jpg";
  import "../assets/css/About.css";

  export default function About() {
    return (
      <MUI_C.Box>
        <MUI_C.Container className="aboutContainer">
          <MUI_C.Grid container spacing={3}>
            <MUI_C.Grid item xs={12} sm={6} className="aboutSectionone">
              <h2 className="fadeIn">Hi there,</h2>
              <h1 className="slideIn">Sachin Sharma this side</h1>
            </MUI_C.Grid>
            <MUI_C.Grid item xs={12} sm={6} className="aboutSectionTwo">
              <p className="fadeIn">
                Innovative Front-End Developer with 1 year of expertise in building responsive,
                high-performance web applications using React. Passionate about merging user-centric design
                with cutting-edge technology to solve complex problems. Proven ability to lead cross-functional teams,
                mentor junior developers, and deliver scalable solutions aligned with Agile workflows.
              </p>
              <img src={Dev} alt="Dev img" className="aboutImage scaleIn" />
            </MUI_C.Grid>
          </MUI_C.Grid>
        </MUI_C.Container>
      </MUI_C.Box>
    );
  } 