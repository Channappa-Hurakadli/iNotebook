import React,{useState} from 'react'
import { useNavigate ,Link} from 'react-router-dom'

const Signup = (props) => {
    const [creds,setCreds] = useState({name:"",email:"",password:"",cpassword:""})
    let navigate = useNavigate()

    const handleSubmit = async (evt)=>{
        evt.preventDefault();
        if(creds.password===creds.cpassword){
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({name:creds.name,email:creds.email,password:creds.password}),
        })
        const data = await response.json();
        // console.log(data)
        if(data.success){
            props.updateAuthStatus(true);
            localStorage.setItem('token',data.authToken)
            navigate('/');
            props.showAlert("Account created successfully","Success")

        }else{
            props.showAlert("Invalid Credentials","danger")
        }}else{
            alert("Passwords don't match")
        }
        }

        const onChange = (evt) =>{
            setCreds({...creds,[evt.target.name]:evt.target.value})
           
        }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp" onChange={onChange}/>
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={onChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={4}required/>
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={4}required/>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      <div className='mt-3'>
        Already have an account? <Link to="/login"> Login</Link>
      </div>
    </div>
  )
}


export default Signup
