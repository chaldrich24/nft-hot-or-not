import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='d-flex align-items-center justify-content-between'>
                <Link to="/">
                    <h1>nfteez<span>.</span></h1>
                </Link>

                <nav className='flex-fill d-flex justify-content-end'>
                    <Link to="/leaderboard" className='ms-3'>Leaderboard</Link>
                    <Link to="/login" className='ms-5'>Login</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;