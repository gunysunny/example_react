import React from 'react';
import './header.css'; // 스타일 분리
import cartImg from '../images/top_right_menu2.png';
import heartImg from '../images/top_right_menu1.png';
import userImg from '../images/top_right_menu3.png';// 탑 오른쪽 이미지 추가
import searchIcon from '../images/search.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">cyber</div>
            <div className="search-container">
                <img src={searchIcon} alt="search" className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="spacer" /> {/* ← 가상의 여백 영역 */}
            <div className="icons">
                <img src={cartImg} alt="cart" className="icon-img" />
                <img src={heartImg} alt="heart" className="icon-img" />
                <img src={userImg} alt="user" className="icon-img" />
            </div>
        </header>
    );
};

export default Header;