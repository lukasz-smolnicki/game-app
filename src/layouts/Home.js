import React from 'react';
import Navigation from './Navigation';
import Page from './Page';

const Home = () => {
    return (
        <main>
            <aside>
                {<Navigation />}
            </aside>
            <section className='page'>
                {<Page />}
            </section>
        </main>
    )
}

export default Home;