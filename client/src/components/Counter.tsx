import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const fourHoursMessage = `That's 4 hours of focus! Amazing`

    return (
        <div>
            <p>focused for {counter}</p>
            <button onClick={() => setCounter(prevCount => prevCount + 1)}>Increase</button>
            {counter >= 240 && <p>{fourHoursMessage}</p>}
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    )
}