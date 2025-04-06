import FocusStreak from "./FocusStreak";
import { describe, it, expect, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";


describe('Focus Streak', () => {
    it('increments the streak by one and resets the streak', async () => {
        const user = userEvent.setup()
        render(<FocusStreak />)

        const incrementButton = screen.getByRole('button', { name: /increment/i})
        const resetButton = screen.getByRole('button', { name: /reset/i})

        expect(screen.getByText("You've focused for 0 day(s) in a row")).toBeInTheDocument()

        await user.click(incrementButton)

        expect(screen.getByText("You've focused for 1 day(s) in a row")).toBeInTheDocument()

        await user.click(resetButton)

        expect(screen.getByText("You've focused for 0 day(s) in a row")).toBeInTheDocument()


    })

    it('should load streak from local storage', async () => {
        localStorage.setItem('focus-streak', "5")

        render(<FocusStreak />)

        vi.spyOn(Storage.prototype, 'setItem')

        expect(screen.getByText("You've focused for 5 day(s) in a row")).toBeInTheDocument()




        localStorage.clear()
    })
})