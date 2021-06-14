import React from 'react'

export class UserSignUpPage extends React.Component {
    state = {
        displayName: '',
        userName: '',
        password: '',
        password2: ''
    }

    handleDisplayName = ({ target: input }) => {
        this.setState({ displayName: input.value })
    }
    handleUserName = ({ target: input }) => {
        this.setState({ userName: input.value })
    }
    handlePassword = ({ target: input }) => {
        this.setState({ password: input.value })
    }
    handleConfirmPassword = ({ target: input }) => {
        this.setState({ password2: input.value })
    }
    handleClickSubmit = () => {
        console.log("Submitted")
        const user = {
            userName: this.state.userName,
            displayName: this.state.displayName,
            password: this.state.password
        }
        this.props.actions.postSignUp(user)
    }
    render() {
        return (<div className="container">
            <h1 className="text-center">Sign Up</h1>
            <div className='col-12 mb-3'>
                <label>Display Name</label>
                <input
                    className='form-control'
                    placeholder='Your Display Name'
                    value={this.state.displayName}
                    onChange={this.handleDisplayName}
                />
            </div>
            <div className='col-12 mb-3'>
                <label>User Name</label>
                <input
                    placeholder='Your User Name'
                    value={this.state.userName}
                    onChange={this.handleUserName}
                />
            </div>
            <div className='col-12 mb-3'>
                <label>Password</label>
                <input
                    type='password'
                    placeholder='Your Password'
                    value={this.state.password}
                    onChange={this.handlePassword}
                />
            </div>
            <div className='col-12 mb-3'>
                <label>Confrim Password </label>
                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={this.state.password2}
                    onChange={this.handleConfirmPassword}
                />
            </div>
            <div className='text-center'>
                <button
                    className='btn btn-primary'
                    type='submit'
                    onClick={this.handleClickSubmit}
                >
                    Submit
                </button>
            </div>

        </div>)
    }

}
UserSignUpPage.defaultProps = {
    actions: {
        postSignUp: () => new Promise((resolve, reject) => {
            resolve({})
        })
    }
}

export default UserSignUpPage