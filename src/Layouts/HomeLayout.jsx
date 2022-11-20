import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import TopHeader from '../Components/Navbar/TopHeader'

function HomeLayout({ children }) {
    return (
        <>
            <TopHeader />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default HomeLayout