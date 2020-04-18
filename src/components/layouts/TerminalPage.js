import React from 'react'
import Typing from 'react-typing-animation'

const TerminalPage = () => {
    // const ReactTypingEffectDemo = () => {
    //     const textnote = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel nemo nisi dolor explicabo excepturi architecto blanditiis modi dolore perferendis, illo deleniti quibusdam suscipit, omnis dicta ratione maxime? Quaerat, excepturi.`
    //     return (
    //         <>
    //             <ReactTypingEffect
    //                 text={textnote}
    //                 speed="5"
    //                 typingDelay="2000"
    //                 eraseDelay="200000"
    //             />
    //             <h6>Loading...</h6>
    //             <h6>Connected</h6>
    //             <h6>================================</h6>
    //             <h6>Welcome to Space Terminal</h6>
    //             <h6>Loading...</h6>
    //             <h6>================================</h6>
    //             <ReactTypingEffect
    //                 text={textnote}
    //                 speed="5"
    //                 typingDelay="2000"
    //                 eraseDelay="200000"
    //             />
    //         </>
    //     );
    // };


    return (
        <article>
            <div className="border terminal scrollbar">
                <Typing speed={0}>
                    <h6>----------------</h6>
                    <h6>Connecting...</h6>
                    <Typing.Delay ms={2000} />
                    <Typing.Speed ms={50} />
                    <h6>Access granted!</h6>
                    <Typing.Delay ms={2000} />
                    <h6>Welcome to ICC Terminal</h6>
                    <Typing.Speed ms={0} />
                    <h6>----------------</h6>
                    <h6>Loading data...</h6>
                    <Typing.Delay ms={2000} />
                    <h6>Year: 3150 | Crew: 50 | Food: <span style={{ color: "#663300" }}>9t</span> | Material: 50t | Uranium: <span style={{ color: "#666611" }}>20t</span> </h6>
                </Typing>
            </div>
        </article>
    )
}

export default TerminalPage