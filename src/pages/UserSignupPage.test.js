import React from 'react'
import {cleanup, render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import {UserSignUpPage} from './UserSignupPage'


beforeEach(cleanup)
describe('UserSignUpPage',()=>{
    describe('Layout',()=>{
        it('has header of Sign Up',()=>{
           const {container}= render(<UserSignUpPage/>)
           const header = container.querySelector('h1')
           expect(header).toHaveTextContent('Sign Up')
        })

        it('has input for display name',()=>{
            const {queryByPlaceholderText} = render(<UserSignUpPage/>)
            const displayName = queryByPlaceholderText('Your Display Name')
            expect(displayName).toBeInTheDocument()
        })

        it('has input for User name',()=>{
            const {queryByPlaceholderText} = render(<UserSignUpPage/>)
            const userName = queryByPlaceholderText('Your User Name')
            expect(userName).toBeInTheDocument()
        })

        it('has input for User Password',()=>{
           const {queryByPlaceholderText} = render(<UserSignUpPage />)
           const userPassword = queryByPlaceholderText('Your Password')
           expect(userPassword).toBeInTheDocument()
        })

        it('has password type  for password input',()=>{
            const {queryByPlaceholderText} = render(<UserSignUpPage />)
            const userPassword = queryByPlaceholderText('Your Password')
            expect(userPassword.type).toBe('password')
         })

         it('has confirm password field',()=>{
            const {queryByPlaceholderText} = render(<UserSignUpPage />)
            const confirmPassword = queryByPlaceholderText('Confirm Password')
            expect(confirmPassword).toBeInTheDocument()
         })

         it('has password type  for confirm password input',()=>{
            const {queryByPlaceholderText} = render(<UserSignUpPage />)
            const confirmPassword = queryByPlaceholderText('Confirm Password')
            expect(confirmPassword.type).toBe('password')
         })

         it('has  button to submit form',()=>{
            const {container} = render(<UserSignUpPage />)
            const submitButton = container.querySelector('button')
            expect(submitButton).toBeInTheDocument()
         })

        //  it('has SUBMIT  label on button to submit form',()=>{
        //     const {container} = render(<UserSignUpPage />)
        //     const submitButton = container.querySelector('button')
        //     expect(submitButton.name).toBe('Submit')
        //  })
    })
})