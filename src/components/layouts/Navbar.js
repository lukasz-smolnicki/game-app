import React from 'react'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLink /> : <SignedOutLink />
    return (
        <ul className="border navbar">
            {links}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);