import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>nfteez<span>.</span></h1>
                </Link>

                <nav>
                    
                </nav>
            </div>
        </header>
    )
}

export default Header;