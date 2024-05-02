// src/components/NumberOfEvents.js

const NumberOfEvents = ({setCurrentNOE}) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        console.log("Number is:", value);

        // Validate the input value
        if (!isNaN(value) && value > 0) {
            // Update the current number of events if the value is valid
            setCurrentNOE(value);
        } else {
            // Default to a minimum of 1 event if invalid input
            setCurrentNOE(1);
        }
    }


    return (
        <div id="number-of-events">
            <p><b>How many events would you like to see?</b></p>
            <input
                type="text"
                className="eventNumber"
                defaultValue="32"
                onChange={handleInputChanged}
            >
            </input>
        </div>
    );
}

export default NumberOfEvents;