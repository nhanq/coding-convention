import React from 'react';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "gray" }} className="footer ">
                <div className="container-fluid">
                    <div className="d-flex justify-content-around footer-menu">
                        <div className="footer-menu-item">
                            <ul style={{ color: "white" }} className='list-unstyled'>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">LA COLLECTION</a></li>
                                <li>
                                    <p style={{ color: "white", maxWidth:"500px" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu-item">
                            <p style={{color:"white"}}>Product</p>
                            <ul style={{ color: "white" }} className='list-unstyled'>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Theme Design</a></li>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Plugin Design</a></li>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Wordpress</a></li>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Joomla Temlate</a></li>
                            </ul>
                        </div>
                        <div className="footer-menu-item">
                            <p style={{ color: "white" }}>Useful Link</p>
                            <ul style={{ color: "white" }} className='list-unstyled'>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Blog</a></li>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Pricing</a></li>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Soles</a></li>
                                <li><a style={{ color: "white" }} className='text-decoration-none' href=".#">Tickets</a></li>
                            </ul>
                        </div>
                        <div className="footer-menu-item">
                            <p style={{ color: "white" }}>Address hehehe</p>
                            <p style={{ color: "white" }}>127, Westwood Lane DA15 9PS, Sidcup London UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer