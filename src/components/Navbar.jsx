import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faQuora } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <nav className="border-2 border-b w-full">
            <div className="flex justify-between items-center p-5 sm:hidden ">
                <button onClick={toggleMenu} className="sm:hidden">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>

            <ul className={`flex flex-col sm:flex-row justify-start gap-3 p-5 text-sm ${isOpen ? "block":"hidden sm:flex"}`}>

                <div className="flex flex-col sm:flex-row gap-4">
                    <li className='sm:ml-10'><NavLink to="/home">Home</NavLink></li>
                    <li><a href="/post">Post</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </div>

                {/* Social media icons */}
                <div className="flex flex-col sm:flex-row sm:ml-auto gap-4 sm:space-x-10">
                    <li>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="text-gray-700 hover:text-blue-500"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-gray-700 hover:text-blue-600"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://quora.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Quora"
                            className="text-gray-700 hover:text-red-600"
                        >
                            <FontAwesomeIcon icon={faQuora} size="lg" />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
