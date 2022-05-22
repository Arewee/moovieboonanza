import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
            className="nav_logo"
            src="https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Font-9-2048x554.png"
            alt="Neflix Logo"
            />

            <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Neflix avatar"
            />

    </div>
  )
}

export default Nav