import React from 'react'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'

const Navbar = () => {

    return (
        <ul className="border navbar">
            <SignedInLink />
            <SignedOutLink />
        </ul>
    );
}

export default Navbar;