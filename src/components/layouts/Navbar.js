import React from 'react'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <ul className="border navbar">
            <SignedInLink />
            <SignedOutLink />
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Navbar);