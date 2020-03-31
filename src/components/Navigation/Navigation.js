import React from 'react';
import { NavLink } from 'react-router-dom';

const list = [
    { name: 'report', path: '/', exact: true },
    { name: 'colony', path: '/colony' },
    { name: 'crew', path: '/crew' },
    { name: 'investments', path: '/investments' },
    { name: 'army', path: '/army' },
    { name: 'trade', path: '/trade' },
    { name: 'space map', path: '/space' },
    { name: 'next turn', path: '/turn' },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="border navigation">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;