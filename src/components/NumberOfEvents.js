const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;

        if (!isNaN(value) && value > 0) {

            setCurrentNOE(value);
            setErrorAlert("");
        }
        else {
            setCurrentNOE(0);
            setErrorAlert("Only postive numbers are allowed");
        }
    };

    return (
        <div id="number-of-events">
            <p>Number of Events:</p>
            <input
                data-testid="event-number-imput"
                type="text"
                className="event-number"
                defaultValue="32"
                onChange={handleInputChanged}
            />
        </div>
    );
};

export default NumberOfEvents;