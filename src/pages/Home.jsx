import { MUI_C } from "../lib/materialUI";
import Img from "../assets/images/S.png";
import "../assets/css/Home.css";
import CV from "../../doc/Resume.pdf";

export default function Home() {
  return (
    <MUI_C.Box>
      <MUI_C.Container className="main-section">
        <MUI_C.Grid container spacing={2}>
          <MUI_C.Grid item xs={12} md={6} className="section-1">
            <div>
              <h3>Hi, I am </h3>
              <h1>Sachin Sharma</h1>
              <p>A Frontend Developer/UI Designer</p>
            </div>
          </MUI_C.Grid>
          <MUI_C.Grid item xs={12} md={6} className="section-2">
            <img src={Img} alt="person Image" />
          </MUI_C.Grid>
        </MUI_C.Grid>
        <MUI_C.Button className="download-btn">
          <a href={CV} target="_blank">
            Download CV
          </a>
        </MUI_C.Button>
      </MUI_C.Container>
    </MUI_C.Box>
  );
}
