import { useCallback } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'
import { Link} from 'react-router-dom'


export const Login = () => {
    const handleSubmit = useCallback(async e => {
        e.preventDefault()

        const { email, password } = e.target.elements
        const auth = getAuth()
        try {
            await signInWithEmailAndPassword(auth, email.value, password.value)
        } catch (e) {
            alert(e.message)
        }
    }, [])

    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input name ="email" placeholder="email" type="email" />
            <input name ="password" placeholder="password" type="password" />
            <button type="submit">Login</button>
        </form>
        <div>
        <p>Not register yet ? <Link to="/signup">SignUp</Link></p>
        </div>
      </div>  
    )
}