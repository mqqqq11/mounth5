
import { useNavigate } from "react-router-dom"
import {paths } from '../App'

export const LoginPage = () => {

  
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (e.target.username.value === 'admin' && e.target.password.value) {
            navigate(paths.profile)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="your username"/>
            <input type="text" name="password" placeholder="your password"/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
