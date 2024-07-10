import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useEcom } from './Contextpp'
function Navbar() {
    let { totalQuantity } = useEcom()
    let quantityof = totalQuantity()
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-light" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active border rounded text-light me-3 py-1 px-2 mt-2" aria-current="page" to="/"><i class="fa-solid fa-house me-2"></i><span>Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/components/Readcartdata"><button type="button" class="btn border rounded position-relative px-3 py-1">
                                    <i className="fa-solid fa-cart-shopping me-2 text-light"></i><span className='text-light'>Cart</span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {quantityof}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./bg1.jpg" class="d-block w-100 image" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="./bg2.jpg" class="d-block w-100 image" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="./bg3.jpg" class="d-block w-100 image" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='text-center shop my-5 text-light'><h2>Shop Now</h2></div>
            
        </>
    )
}

export default Navbar
