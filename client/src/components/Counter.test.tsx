import Counter from "./Counter";
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' // 🔧 remove the destructuring

describe("Counter", () => {
  it("increases from 0 to 1 and resets to 0 when buttons are clicked", async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const counterDisplay = screen.getByText(content => content.includes('focused for 0'))
    const increaseButton = screen.getByRole('button', { name: /increase/i })
    const resetButton = screen.getByRole('button', { name: /reset/i })

    expect(counterDisplay).toBeInTheDocument()

    await user.click(increaseButton)

    expect(screen.getByText(/focused for 1/i)).toBeInTheDocument()

    await user.click(resetButton)

    expect(screen.getByText(/focused for 0/i)).toBeInTheDocument()
  })

  it(`when the counter exceeds 240 minutes, a message appears: "That's 4 hours of focus! Amazing`, async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const increaseButton = screen.getByRole('button', { name: /increase/i })

    expect(screen.queryByText(/That's 4 hours of focus! Amazing./i)).not.toBeInTheDocument()

    for(let i = 0; i < 240; i++) {
      await user.click(increaseButton)
    }

    expect(screen.getByText(text => text.includes(`That's 4 hours of focus! Amazing`))).toBeInTheDocument()


  })
})