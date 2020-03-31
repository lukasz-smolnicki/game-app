import React from 'react'
import TerminalPage from '../pages/TerminalPage'
import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'

const Main = () => {
    return (
        <article>
            <section>
                <TerminalPage />
            </section>
            <section>
                <HomePage />
            </section>
            <section>
                <DetailsPage />
            </section>
        </article>
    )
}

export default Main
