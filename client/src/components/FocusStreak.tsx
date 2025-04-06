import { useEffect, useState } from "react"

export default function FocusStreak() {
    const [streak, setStreak] = useState<number>(0)

    useEffect(() => {
        fetchStreakLocalStorage()
    }, [])
  

    function incrementStreak() {
        setStreak(prevStreak => {
            const updated = prevStreak + 1
            localStorage.setItem('focus-streak', JSON.stringify(updated))
            return updated
        })
        
    }

    function resetStreak() {
        setStreak(0)
        localStorage.setItem('focus-streak', '0')
    }

    function fetchStreakLocalStorage() {
        const savedStreak = Number(localStorage.getItem('focus-streak'))
        setStreak(savedStreak || 0)
    }

    return (
        <div>
            <p>You've focused for {streak} day(s) in a row</p>
            <button onClick={incrementStreak}>Increment</button>
            <button onClick={resetStreak}>Reset</button>
        </div>
    )
}