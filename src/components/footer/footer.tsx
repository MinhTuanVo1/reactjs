import './footer.scss';

function Footer() {
    return (
        <div className="containerFooter">
            <div className="companyInfo">
                <div>
                    <img src="./images/White.png" alt='logoFooter'/>
                </div>
                <div className="detailInfor">
                    <div>
                        <p className="title">Digi-connect</p>
                        <div className="infor">
                            <img src="./images/pin.png" alt='iconAddress'/>
                            <p>2nd Floor, ANNA Bldg., Quang Trung Sofware City, District 12, HCMC, Vietnam</p>
                        </div>
                        <div className="infor">
                            <img src="./images/handphone.png" alt='iconPhone'/>
                            <p>+84 28 3715 5325</p>
                        </div>
                        <div className="infor">
                            <img src="./images/envelope.png" alt='iconEmail'/>
                            <p>info@digi-connect.vn</p>
                        </div>
                    </div>
                    <div>
                        <p className="title">About</p>
                        <div className="infor">
                            <p>About us</p>
                        </div>
                        <div className="infor">
                            <p>Recruting</p>
                        </div>
                        <div className="infor">
                            <p>News</p>
                        </div>
                    </div>
                    <div>
                        <p className="title">Legal</p>
                        <div className="infor">
                            <p>Term of Services</p>
                        </div>
                        <div className="infor">
                            <p>Privacy Policy</p>
                        </div>
                        <div className="infor">
                            <p>Site Map</p>
                        </div>
                    </div>
                    <div>
                        <p className="title">Connect</p>
                        <div className="infor">
                            <p>Digi-Care</p>
                        </div>
                        <div className="infor">
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copyrightArea">
                <div>Copyrights 2020 DIGI-CONNECT. All rights reserved</div>
                <div className="socialNetwork">
                    <p>Follow us</p>
                    <img src="./images/facebook.png" alt='iconSocialMedia'/>
                    <img src="./images/twitter.png" alt='iconSocialMedia'/>
                    <img src="./images/youtube.png" alt='iconSocialMedia'/>
                    <img src="./images/linkedin.png" alt='iconSocialMedia'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;