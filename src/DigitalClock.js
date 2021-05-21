import React, {useState} from 'react'

function DigitalClock() {

    let time = new Date().toLocaleTimeString();
    const [currenttime, setCurrenttime] = useState(time);


    const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrenttime(time);
    };

    setInterval(UpdateTime, 1000)
    return (
        <div>
            <h1>{currenttime}</h1>
        </div>
    )
}

export default DigitalClock
