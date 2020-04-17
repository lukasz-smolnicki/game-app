import React from 'react';
import { NavLink } from 'react-router-dom';

const list = [
    { name: 'sign up', path: '/signup', exact: true },
    { name: 'login', path: '/login' },
]

const SignedOutLinks = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <ul>
            {menu}
        </ul>
    );
}

export default SignedOutLinks;