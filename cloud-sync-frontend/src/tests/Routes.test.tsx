import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { SyntheticEvent } from 'react'
import '@testing-library/jest-dom'
import App from '../App'
import {BrowserRouter, useNavigate} from 'react-router-dom'

describe('tests related to React Router', () => {

    test('check initial render & navigation', async () => {
        render(<App />, {wrapper: BrowserRouter})

        const user = userEvent.setup()

        expect(screen.getByText(/To Login please enter your email address below/i)).toBeInTheDocument()

        await user.click(screen.getByText(/Sign Up/i))

        expect(screen.getByText(/To Sign-up please enter your details below/i)).toBeInTheDocument()
    })

    test('check redirect will succesfully pass user to logged in page', async () => {
        const route = "/success"

        const user = userEvent.setup()

        const TestComponent = () => {
            const history = useNavigate()

            const handleClick = (event : SyntheticEvent) => {
                history(route)
            }

            return (
              <>
                <App></App>
                <button onClick={handleClick}>CLICK ME</button>
              </>
            )
          }

        render(<TestComponent />, {wrapper: BrowserRouter})

        await user.click(screen.getByText(/CLICK ME/i))

        expect(screen.getByText(/You have logged in succesfully/i)).toBeInTheDocument()
    })
})
