import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CupsOfTeaCounter = () => {

    const [counterOn, setCounterOn] = useState(false);

    return(
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div style={{
                width: '100%',
                background: 'black',
                marginTop: '100px',
                marginBottom: '100px',
                color: 'white',
                padding: '50px'
            }}>
                <h1> 
                    Today only in Starbucks were purchased 
                    {counterOn && <span style={{color: 'red'}}> <CountUp start={0} end={9368} duration={3} delay={0}/> </span> }
                    cups of tea
                </h1>
            </div>
        </ScrollTrigger>
    )
}
export default CupsOfTeaCounter;