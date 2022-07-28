import '../stylesheets/Signup.css'
import { SyntheticEvent } from 'react'
import { SIGNUP } from '../fetchURLS'

function Signup() {
    function handleSubmit(event: SyntheticEvent) {
        const { username, email, mobile } = event.target as HTMLFormElement

        event.preventDefault()

        const userDetails = {
            username: username.value,
            email: email.value,
            mobile: mobile.value
        }

        fetch(SIGNUP, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(userDetails)
        })
    }

    return (
        <div className="container">
        <h2>To Sign-up please enter your details below</h2>
        <form action="" method="post" className="form" onSubmit={handleSubmit}>
            <section className="form-row">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" required/>
            </section>
            <section className="form-row">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" required/>
            </section>
            <section className="form-row">
                <label htmlFor="mobile">Mobile: </label>
                <input type="text" name="mobile" id="mobile" required/>
            </section>
            <button className="form-button">Submit</button>
        </form>
    </div>
    )
}

export default Signup
