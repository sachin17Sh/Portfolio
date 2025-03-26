import Footer from "../layouts/Footer"
import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>

    )
}
