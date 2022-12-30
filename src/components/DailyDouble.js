import React from 'react';

// Made into a pure function, as class notation was not necessary
export default props => {
    var wager = 0;

    function handleChange(e) {
        wager = e.target.value;
    }

    return (
        <div className='question'>
            <h2>Weekly Wager. Pog!</h2>
            <div className="wager-box">
                <h2>The Weekly Wager</h2>
                <div>{props.playerName}</div>
                <input type="text"
                    onChange={handleChange}
                    placeholder={"Up to $" + props.playerPoints} />
                <div>
                    <button onClick={(event) => {
                        if (wager > props.playerPoints || isNaN(wager)) {
                            alert(`${props.playerName} cannot wager more than ${props.playerPoints}.`);
                        } else if (isNaN(wager)) {
                            alert(`What are you doing? ${wager} is not a number you idiot`);
                        }
                        else {
                            props.openQuestion(props.category, props.question.value, false /* isDailyDouble */, wager);
                        }
                    }}>
                        Wager
                    </button>
                </div>
            </div>
        </div>
    )
};