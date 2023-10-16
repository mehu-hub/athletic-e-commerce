import React from "react";
import footer1 from '../Assets/images/android.png'
import footer2 from '../Assets/images/ios.png'
import '../Assets/footer.css'
import logo from '../Assets/images/logo.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div>
                    <img className="footer-img" src={logo} alt="" />
                    <ul className="quick-list">
                        <li>Men Fashion</li>
                        <li>Women Fashion</li>
                        <li>Kids</li>
                        <li>Trending</li>
                    </ul>
                </div>
                <div>
                    <h4 className="quick-link">Category</h4>
                    <ul className="quick-list">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Trendy</li>
                    </ul>
                </div>
                <div>
                    <h4 className="quick-link">Help</h4>
                    <ul className="quick-list">
                        <li>Faq</li>
                        <li>Contact Us</li>
                        <li>Email</li>
                        <li>© All right reserve <span className="copy-right">Athletic</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className="get-app">Get The App</h3>
                    <div className="app-icon">
                        <img src={footer1} alt="" />
                        <img src={footer2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;