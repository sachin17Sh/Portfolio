import { NavLink } from "react-router-dom"
import { MUI_C } from "../lib/materialUI.jsx"
import Logo from "../assets/images/S.png"
import "../assets/css/Header.css"

export default function Header() {
  return (
    <>
   
        <MUI_C.Grid container spacing={3} className="mainContainer" >
          <MUI_C.Grid item xs={6} >
            <img src={Logo} alt="Logo" className="logo" />
          </MUI_C.Grid>
          <MUI_C.Grid item xs={6} >
            <MUI_C.List className="nav-list">
              <MUI_C.ListItem>
                <NavLink to="/" className="navlinks">
                  Home
                </NavLink>
              </MUI_C.ListItem>
              <MUI_C.ListItem>
                <NavLink to="/about" className="navlinks">
                  About
                </NavLink>
              </MUI_C.ListItem>
              <MUI_C.ListItem>
                <NavLink to="/skills" className="navlinks" >
                  Skills
                </NavLink>
              </MUI_C.ListItem>
              <MUI_C.ListItem>
                <NavLink to="/projects" className="navlinks" >
                  Projects
                </NavLink>
              </MUI_C.ListItem>
              <MUI_C.ListItem>
                <NavLink to="/contact" className="navlinks" >
                  Contact
                </NavLink>
              </MUI_C.ListItem>
            </MUI_C.List>
          </MUI_C.Grid>
        </MUI_C.Grid>
    </>
  )
}



