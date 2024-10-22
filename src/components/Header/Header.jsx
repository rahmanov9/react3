import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__box">
              <h1>Lorem ipsum dolor sit amet <br /> <span>consectetur</span>.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum fugit commodi optio labore tenetur modi?</p>
              <button>ДВИГАТСЯ К МЕЧТЕЕЕЕ!</button>
            </div>
            <img className='header__img' src="https://abbos29.github.io/dream/img/main.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
