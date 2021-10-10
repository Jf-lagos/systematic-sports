import { useCallback, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import './SignUp.css'
import { Link } from 'react-router-dom'

export const SignUp = ({props}) => {
    const handleSubmit = useCallback(async e => {
        e.preventDefault()
        const {email, password } = e.target.elements
        const auth = getAuth()
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value)
        } catch (e) {
            alert(e.message)
        }
    }, [])


return (
    <div className="signUp">
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
        <input name ="name" placeholder="name" type="text" />
        <input name ="email" placeholder="Email" type="email" />
        <input name ="password" placeholder="Password" type="password" />
        <button type="submit">Sign Up</button>
    </form>
        <div>
            <p>Already member ? <Link to="/login">Login</Link></p>
        </div>
    </div>  
    )
}


