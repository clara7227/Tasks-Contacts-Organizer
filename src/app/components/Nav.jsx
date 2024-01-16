import React from 'react';
import Link from "next/link";

export const Nav = () => {
    return (
        <div>
            <nav className='NavBar'>
                <div className="Logo">
                    2DO/<span className='SecondPartLogo'>2DAY</span>
                    <img></img>
                </div>
                <ul className='NavMenu'>
                    <li className='ItemMenu'> <Link href="./tasks">
                        <h6> To Do List
                        </h6>  </Link>
                    </li>
                    <li className='ItemMenu'> <h6> To Done List </h6></li>
                    <li className='ItemMenu'> <Link href="./contacts">
                        <h6> Contacts
                        </h6>  </Link>
                    </li>
                    <li className='ItemMenu'> <h6> Settings </h6></li>
                    <li className='ItemMenu'>
                        <span className="material-icons">logout</span>
                        <h6> Log out </h6></li>
                </ul>
            </nav>
        </div>
    );
}

