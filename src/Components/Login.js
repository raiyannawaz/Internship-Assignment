import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [credentials, setCredentials] = useState({username: '', password: ''})

    let navigate = useNavigate()
    
    const handleChange = (e) =>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const handleClick = async (e) =>{
        e.preventDefault();

        let getUsers = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
          })
        
        let jsData = await getUsers.json();

        localStorage.setItem('token', JSON.stringify(jsData.token))

        navigate('/')
    }



    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-10 mx-auto">
                    <h1>Login</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Username: </label>
                            <input type="text" name='username' value={credentials.username} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password: </label>
                            <input type="password" name='password' value={credentials.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
