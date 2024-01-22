const NumberOfEvents = ({ setCurrentNOE }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
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