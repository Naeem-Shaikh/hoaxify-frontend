import React from 'react'
import { cleanup, fireEvent, render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { UserSignUpPage } from './UserSignupPage'


beforeEach(cleanup)
describe('UserSignUpPage', () => {
    describe('Layout', () => {
        it('has header of Sign Up', () => {
            const { container } = render(<UserSignUpPage />)
            const header = container.querySelector('h1')
            expect(header).toHaveTextContent('Sign Up')
        })

        it('has input for display name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const displayName = queryByPlaceholderText('Your Display Name')
            expect(displayName).toBeInTheDocument()
        })

        it('has input for User name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const userName = queryByPlaceholderText('Your User Name')
            expect(userName).toBeInTheDocument()
        })

        it('has input for User Password', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const userPassword = queryByPlaceholderText('Your Password')
            expect(userPassword).toBeInTheDocument()
        })

        it('has password type  for password input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const userPassword = queryByPlaceholderText('Your Password')
            expect(userPassword.type).toBe('password')
        })

        it('has confirm password field', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const confirmPassword = queryByPlaceholderText('Confirm Password')
            expect(confirmPassword).toBeInTheDocument()
        })

        it('has password type  for confirm password input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const confirmPassword = queryByPlaceholderText('Confirm Password')
            expect(confirmPassword.type).toBe('password')
        })

        it('has  button to submit form', () => {
            const { container } = render(<UserSignUpPage />)
            const submitButton = container.querySelector('button')
            expect(submitButton).toBeInTheDocument()
        })

        //  it('has SUBMIT  label on button to submit form',()=>{
        //     const {container} = render(<UserSignUpPage />)
        //     const submitButton = container.querySelector('button')
        //     expect(submitButton.name).toBe('Submit')
        //  })
    })
    describe('Interactions', () => {
        const changeEvent = (content) => {
            return {
                target: {
                    value: content
                }
            }
        }

        let button, displayName, userName, password, confirmPassword

        const setupForSubmit = (props) => {


            const rendered = render(<UserSignUpPage {...props} />)

            const { container, queryByPlaceholderText } = rendered
            displayName = queryByPlaceholderText('Your Display Name')
            userName = queryByPlaceholderText('Your User Name')
            password = queryByPlaceholderText('Your Password')
            confirmPassword = queryByPlaceholderText('Confirm Password')

            fireEvent.change(displayName, changeEvent('my-display-name'))
            fireEvent.change(userName, changeEvent('my-user-name'))
            fireEvent.change(password, changeEvent('P4ssword'))
            fireEvent.change(confirmPassword, changeEvent('P4ssword'))

            button = container.querySelector('button')

            return rendered
        }

        it('sets the displayName value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const displayName = queryByPlaceholderText('Your Display Name')

            fireEvent.change(displayName, changeEvent('my-display-name'))
            expect(displayName).toHaveValue('my-display-name')
        })

        it('sets the UserName value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const displayName = queryByPlaceholderText('Your User Name')

            fireEvent.change(displayName, changeEvent('my-user-name'))
            expect(displayName).toHaveValue('my-user-name')
        })

        it('sets the Password value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const userName = queryByPlaceholderText('Your Password')

            fireEvent.change(userName, changeEvent('P4ssword'))
            expect(userName).toHaveValue('P4ssword')
        })

        it('sets the confirm Password value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />)
            const userName = queryByPlaceholderText('Confirm Password')

            fireEvent.change(userName, changeEvent('P4ssword'))
            expect(userName).toHaveValue('P4ssword')
        })

        it('calls postSignUp when the fields are valid and the acitons are provided in prop', () => {
            const actions = {
                postSignUp: jest.fn().mockResolvedValueOnce({})
            };

            setupForSubmit({ actions })
            fireEvent.click(button)
            expect(actions.postSignUp).toHaveBeenCalledTimes(1)

        })
        it(' does not throw exception when calls postSignUp when the fields are valid and the acitons are not provided in prop', () => {
            setupForSubmit()
            expect(() => fireEvent.click(button)).not.toThrow()

        })

        it('calls with user body  when the fields are valid ', () => {
            const actions = {
                postSignUp: jest.fn().mockResolvedValueOnce({})
            };

            setupForSubmit({ actions })
            fireEvent.click(button)
            const expeectedUserObject={
                userName:'my-user-name',
                displayName:'my-display-name',
                password:'P4ssword'
            }
            expect(actions.postSignUp).toHaveBeenCalledWith(expeectedUserObject)

        })
    })
})