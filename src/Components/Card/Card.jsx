import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import '../../Assets/Css/Card.css'

function Card(props) {
    const {
        id,
        img_url,
        title,
        discription,
        nav_link
    } = props
    return (
        <>
            <div className="card border border-0">
                <div className="card-body rounded p-0 shadow d-flex flex-lg-row flex-column">
                    <div className='col-lg-5 col-md-12 col-12'>
                        <img className='' width={"100%"} src={img_url} />
                    </div>
                    <div className='col-lg-7 col-md-12 col-12 p-3'>
                        <h6>
                            {title}
                        </h6>
                        <span>{discription}</span>
                        <div className='d-flex justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-center'>
                            <button className='btn bg-white card-btn text-success d-flex justify-content-end align-items-center py-2 mt-2 gap-3'>
                                VIEW MORE <FaChevronCircleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card