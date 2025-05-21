import React from 'react';
import './F_banner.css'; // 스타일 분리
import bannerImage from '../images/Iphone Image.png';




const Banner = () => {
    return (
        <div className="background">
            <section>
                <div className="left-box">
                    <p className="F_chat">Pro.Beyond.</p>
                    <h1 className="S_chat">IPhone 14 <strong>Pro</strong></h1>
                    <p className="T_chat">Created to change everything for the better. For everyone</p>
                    <button>Show Now</button>
                </div>
                <div className="right-image">
                    <img src={bannerImage} alt="iphone" className="banner" />
                </div>
            </section>
        </div>
    );
};

export default Banner;