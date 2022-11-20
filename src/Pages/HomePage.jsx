import React, { useEffect, useState } from 'react'
import '../Assets/Css/HomePage.css'
import { FaChevronCircleRight } from 'react-icons/fa'
import Card from '../Components/Card/Card'
import { CardData } from '../Data/HomePage/Card'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactDetailsInit = {
    name: "",
    email: "",
    contact: "",
    message: "",
}

function HomePage() {
    const [contactDetails, setContactDetails] = useState(contactDetailsInit);
    const [contactFormErrors, setContactFormErrors] = useState({})
    const [isSubmitMsg, setIsContactMsg] = useState(false)

    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target
        setContactDetails({ ...contactDetails, [name]: value })
    }

    const validation = (value) => {
        const errors = {}
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.name) {
            errors.name = "Name is required"
        }
        if (!value.email) {
            errors.email = "Email is required"
        } else if (!emailRegex.test(value.email)) {
            errors.email = "Email is invalid"
        }
        return errors;
    }

    const sendContactMessage = (e) => {
        e.preventDefault();
        setContactFormErrors(validation(contactDetails));
        setIsContactMsg(true)
    }
    const notify = () => toast.success("Message Send!");
    useEffect(() => {
        if (Object.keys(contactFormErrors).length === 0 && isSubmitMsg) {
            notify();
        }
    }, [contactFormErrors]);
    return (
        <>
            {/* hero section */}
            <div className='container-fluid p-0 bg-image mb-5'>
                <div className='container h-100'>
                    <div className='col-lg-8 col-md-8 col-12 text-white px-2 hero-text-content d-flex flex-column justify-content-center align-center'>
                        <span className='hero-text-title-1'>Lorem ipsum dolor sit amet consectetur</span>
                        <span className='hero-text-title-2 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis</span>
                        <button className='btn bg-white hero-btn text-success d-flex justify-content-center align-items-center py-2 mt-4 gap-3'>
                            START TODAY <FaChevronCircleRight />
                        </button>
                    </div>
                </div>
            </div>
            {/* card section */}
            <div className='container mb-5'>
                <div className='row'>
                    {CardData.map((item) => (
                        <div key={item.id} className='col-sm-6 mb-3'>
                            <Card {...item} />
                        </div>
                    ))}
                </div>
            </div>
            {/* text section */}
            <div className='container mb-5'>
                <div className='row'>
                    <h1 className='mb-2'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h1>
                    <p className='text-conent-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione laborum vitae laudantium hic dolorem doloremque nobis beatae nesciunt! Eos, cupiditate enim ad odit laudantium laborum impedit placeat inventore deleniti consectetur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium voluptate saepe dolor ratione ducimus, numquam optio itaque vitae quia, voluptates dignissimos expedita consequuntur at sint? Voluptatibus praesentium qui recusandae.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quas praesentium, tempore assumenda recusandae, impedit pariatur sit atque ut, adipisci maxime enim exercitationem nostrum corrupti? Sequi voluptatem aliquid sapiente dolore!
                    </p>
                </div>
            </div>
            {/* image and text section */}
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-12 p-0'>
                        <img className='w-100 img-fluid' src='https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    </div>
                    <div className='col-lg-6 col-md-12 col-12 bg-light p-0'>
                        <div className='d-flex flex-column aligm-items-center justify-content-center image-text-content'>
                            <h1>Loream ipsum</h1>
                            <p className='text-conent-color'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quasi similique dolore, voluptatem earum quaerat est velit! Consectetur sapiente aspernatur aperiam, provident officia quas. Quos expedita quam ratione sit commodi?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequuntur soluta totam quo, possimus esse eos dolore quae dolorem dolorum fuga ab beatae illum, placeat quisquam quia molestias nostrum saepe!
                            </p>
                            <div className='row justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-center'>
                                <button className='btn bg-white text-content-btn text-success d-flex justify-content-center align-items-center py-2 gap-3'>
                                    Read More <FaChevronCircleRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* social media and logo and name */}
            <div className='container mb-5'>
                <div className='row flex-column justify-content-center text-center'>
                    <h3>LogoName</h3>
                    <div className='d-flex justify-content-center'>
                        <span className='me-2'><AiFillTwitterCircle color='#1DA1F2' fontSize="2.5rem" /></span>
                        <span className='me-2'><AiFillYoutube color='#FF0000' fontSize="2.5rem" /></span>
                        <span className='me-2'><AiFillInstagram color='#833AB4' fontSize="2.5rem" /></span>
                        <span className='me-2'><AiFillFacebook color='#4267B2' fontSize="2.5rem" /></span>
                    </div>
                </div>
            </div>
            {/* contact setion */}
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero provident eos quas, nemo accusamus iste? Eveniet vero iste impedit eius dolorem dignissimos cupiditate molestiae. Laudantium maxime omnis eveniet aut!</p>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-6'>
                                <h4 className='mb-3'>Contact Details</h4>
                                <span className='mb-3'>Lorem ipsum dolor</span>
                                <h6 className='contact-email'>lorem@gmail.com</h6>
                                <h6 className='text-conent-color'>+94 0111111111</h6>
                                <h6 className='text-conent-color'>+94 0111111111</h6>
                            </div>
                            <div className='col-lg-6 col-md-6 col-6'>
                                <h4>Quik Links</h4>
                                <ul className='quik-links'>
                                    <li className='mb-2'><a href='#'>Home</a></li>
                                    <li className='mb-2'><a href='#'>About</a></li>
                                    <li className='mb-2'><a href='#'>Products</a></li>
                                    <li><a href='#'>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 d-flex flex-column'>
                        <h2>Contact Us</h2>
                        <div className='row'>
                            <div className="col-lg-6 col-md-6 col-12 mb-3">
                                <input onChange={handleChange} type="text" name="name" className="form-control border border-success" id="exampleFormControlInput1" placeholder="Name" />
                                <span className='smaill text-danger'>{contactFormErrors.name}</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 mb-3">
                                <input onChange={handleChange} type="email" name="email" className="form-control border border-success" id="exampleFormControlInput1" placeholder="Email" />
                                <span className='smaill text-danger'>{contactFormErrors.email}</span>
                            </div>
                            <div className="col-12 mb-3">
                                <input onChange={handleChange} type="text" name="contact" className="form-control border border-success" id="exampleFormControlInput1" placeholder="Contact" />
                            </div>
                            <div className='col-12 mb-3'>
                                <textarea onChange={handleChange} name='message' placeholder='Message' className="form-control border border-success" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='row justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-center'>
                            <div className="col-12 col-lg-3 col-md-3">
                                <button onClick={sendContactMessage} className='btn text-white bg-success w-100 send-btn'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default HomePage