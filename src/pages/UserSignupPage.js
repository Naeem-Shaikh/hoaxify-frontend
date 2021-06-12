import React from 'react'

export class UserSignUpPage extends React.Component {

    render() {
        return (<div>
            <h1>Sign Up</h1>
            <div>
                <input placeholder='Your Display Name' />
            </div>
            <div>
                <input placeholder='Your User Name' />
            </div>
            <div>
                <input type='password' placeholder='Your Password' />
            </div>
            <div>
                <input type='password' placeholder='Confirm Password' />
            </div>
            <div>
                <button type='submit'  >
                    Submit
                </button>
            </div>

        </div>)
    }
}

export default UserSignUpPage