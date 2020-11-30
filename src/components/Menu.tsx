import React, { useCallback }from "react"

const Menu: React.FC<{onStateChange: Function}> = ({onStateChange}) => {
    const handleStateChange = useCallback(() => {
        onStateChange("play")
    }, [onStateChange])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the Trivia Challenge</h1>
                <h3>You will be presented with 10 true or false questions!</h3>
                <h5>Can you score 100%?</h5>
                <button onClick={() => handleStateChange()}>BEGIN</button>
            </header>
        </div>  
    )
}

export default Menu