import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faQuora } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
        <nav className="border-red-500">
            <ul className="flex justify-start gap-10 p-5 text-sm border-2">
                <li className='ml-[20%]'><a href="/">Home</a></li>
                <li><a href="/post">Post</a></li>
                <li><a href="/about">About</a></li>
                <li className='mr-[30%]'><a href="/contact">Contact</a></li>

                {/* Social media icons */}
                <div className="flex space-x-10">
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
