import {Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const SharedLayout = () => {
    return (<section>
        <Header />
        <Outlet />
        <Footer />
    </section>
    )
}

export default SharedLayout