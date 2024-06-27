import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>
                <Link to="/logs">Captain Logs</Link>
            </h1>
        </div>
    );
};

export default Navbar;