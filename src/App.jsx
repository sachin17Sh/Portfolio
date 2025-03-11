import RootLayout from "./components/Root.jsx"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"


const router = createBrowserRouter([
{
  path: '/',
  element: <RootLayout/>,
  children:[
    {index: true, element: <Home/>},
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'skills',
      element : <Skills/>
    },
    {
      path: 'projects',
      element: <Projects/>
    },
    {
      path: 'contact',
      element: <Contact/>
    }
  ]
}
])

export default function App() {
  return <RouterProvider router={router}/>
}
