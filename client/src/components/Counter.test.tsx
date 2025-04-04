import Counter from "./Counter";
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'


describe("Counter", () => {
    it('counter increase from 0 to 1 when the button is clicked', async () => {
        const user = userEvent.setup()
        render(<Counter />)

        expect(screen.getByText('0')).toBeInTheDocument()

        


    })
})