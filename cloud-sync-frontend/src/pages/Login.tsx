import '../App.css';

function Login() {
    return (
        <div className="container">
            <h2>To Login please enter your email address below</h2>
            <form action="" method="post" className="form">
                <section>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" required/>
                </section>
            </form>
        </div>
    )
}

export default Login
