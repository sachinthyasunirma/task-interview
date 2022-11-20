import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import '../../Assets/Css/Navbar.css'
import NavbarData from '../../Data/Navbar/NavbarData'

const urlPathName = window.location.pathname;

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light pb-3">
            <div className="container">
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 justify-content-between">
                        {NavbarData.map((nav) => (
                            <a key={nav.nav_id} className={"nav-link navbar-link-custom " + `${urlPathName == nav.nav_link ? "nav-link-active" : ""}`} aria-current="page" href={nav.nav_link}>{nav.nav_name}</a>
                        ))}

                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 d-inline-block d-lg-none d-md-none d-sm-none line-height-custom'>
                            <span className='me-2'><AiFillTwitterCircle color='#1DA1F2' fontSize="1.5rem" /></span>
                            <span className='me-2'><AiFillYoutube color='#FF0000' fontSize="1.5rem" /></span>
                            <span className='me-2'><AiFillInstagram color='#833AB4' fontSize="1.5rem" /></span>
                            <span className='me-2'><AiFillFacebook color='#4267B2' fontSize="1.5rem" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar