import RootLayout from "./components/Root.jsx"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Skills from "./pages/Skills.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"


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
