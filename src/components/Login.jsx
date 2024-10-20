import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [creds,setCreds] = useState({email:"",password:""})
    let navigate = useNavigate()

    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({email:creds.email,password:creds.password}),
        })
        const data = await response.json();
        // console.log(data)
        if(data.success){
            props.updateAuthStatus(true);
            localStorage.setItem('token',data.authToken);
            navigate('/');
            props.showAlert("Login successful","Success")


        }else{
            props.showAlert("Invalid","Danger")

        }
        }

        const onChange = (evt) =>{
            setCreds({...creds,[evt.target.name]:evt.target.value})
           
        }
    
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={creds.email} onChange={onChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password" value={creds.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      <div className='mt-3'>
        Don't have an account? <Link to="/signup"> SignUp</Link>
      </div>
    </div>
  )
}

export default Login
