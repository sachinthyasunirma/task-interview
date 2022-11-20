import React from 'react'
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import '../../Assets/Css/Navbar.css'

function TopHeader() {
    return (
        <div className='border-bottom py-2 bg-light'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 d-none d-lg-inline-block d-md-none d-sm-none d-xs-none line-height-custom'>
                        <span className='me-2'><AiFillTwitterCircle color='#1DA1F2' fontSize="1.5rem" /></span>
                        <span className='me-2'><AiFillYoutube color='#FF0000' fontSize="1.5rem" /></span>
                        <span className='me-2'><AiFillInstagram color='#833AB4' fontSize="1.5rem" /></span>
                        <span className='me-2'><AiFillFacebook color='#4267B2' fontSize="1.5rem" /></span>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 bold line-height-custom d-flex justify-content-lg-center justify-content-md-between justify-content-between'>
                        <div className=''>
                            Logo Name
                        </div>
                        <div className='navbar navbar-expand-lg'>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-end'>
                        <div className='col-lg-8 col-md-12 col-12'>
                            <div className="input-group">
                                <input type="text" className="form-control search-bar" placeholder="search" aria-label="" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary border-start-0 bg-white search-btn" type="button" id="button-addon2"><CiSearch /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader