import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    const ReactTypingEffectDemo = () => {
        const textnote = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel nemo nisi dolor explicabo excepturi architecto blanditiis modi dolore perferendis, illo deleniti quibusdam suscipit, omnis dicta ratione maxime? Quaerat, excepturi.`
        return (
            <>
                <ReactTypingEffect
                    text={textnote}
                    speed="5"
                    typingDelay="2000"
                    eraseDelay="200000"
                />
                <h6>Loading...</h6>
                <h6>Connected</h6>
                <h6>================================</h6>
                <h6>Welcome to Space Terminal</h6>
                <h6>Loading...</h6>
                <h6>================================</h6>
                <ReactTypingEffect
                    text={textnote}
                    speed="5"
                    typingDelay="2000"
                    eraseDelay="200000"
                />
            </>
        );
    };
    return (
        <ReactTypingEffectDemo />
    )
}

export default Header;