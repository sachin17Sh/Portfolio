import { NavLink } from "react-router-dom"
import { MUI_C } from "../lib/materialUI.jsx"
import Logo from "../assets/images/Logo.gif"
import "../assets/css/MainNavigation.css"

export default function MainNavigation() {
  return (
    <>
      <MUI_C.Box>
        <MUI_C.Grid container spacing={3} >
          <MUI_C.Grid item xs={3} >
            <img src={Logo} alt="Logo" className="logo" />
          </MUI_C.Grid>
          <MUI_C.Grid item xs={9} >
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
      </MUI_C.Box>
    </>
  )
}



