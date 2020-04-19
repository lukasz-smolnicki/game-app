import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const list = [
    { name: 'report', path: '/', exact: true },
    { name: 'colony', path: '/colony' }, { name: 'create', path: '/create' },
    { name: 'crew', path: '/crew' },
    { name: 'investments', path: '/investments' },
    { name: 'army', path: '/army' },
    { name: 'trade', path: '/trade' },
    { name: 'space map', path: '/space' },
    { name: 'next turn', path: '/turn' },
]

const SignedInLinks = (props) => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <ul>
            {menu}
            <button onClick={props.signOut}>log out</button>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);