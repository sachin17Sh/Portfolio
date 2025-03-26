import { MUI_C } from "../lib/materialUI"
import Img from "../assets/images/S.png"
import "../assets/css/Home.css"
export default function Home() {
  return (
    <>
      <MUI_C.Box >
        <MUI_C.Container className="main-section">
          <MUI_C.Grid container spacing={2} >
            <MUI_C.Grid xs={6} item className="section-1">
              <div>
                <h3>Hi, I am </h3>
                <h1>Sachin Sharma</h1>
                <p>A Frontend Developer/UI Designer</p>
              </div>
            </MUI_C.Grid>
            <MUI_C.Grid xs={6} item className="section-2" >
              <img src={Img} alt="person Image" />
            </MUI_C.Grid>
          </MUI_C.Grid>
          <MUI_C.Button>Download CV</MUI_C.Button>
        </MUI_C.Container>
      </MUI_C.Box>
    </>
  )
}
