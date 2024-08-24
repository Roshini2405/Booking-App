import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function RegisterPage(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try{await axios.post("/register",{
            name,
            email,
            password,
        });
        alert('Successfully Registered');
    }catch(e){
        alert('Registration Failed.Please try again later');
    }
        
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-3xl text-center ">Register</h1>
            <form className="max-w-md mx-auto border" onSubmit={registerUser}>
                <input type="text" 
                   placeholder="Your Name"
                   value={name}
                   onChange={ev=>setName(ev.target.value)}/>
                <input type="email" 
                   placeholder="your@email.com"
                   value={email}
                   onChange={ev=>setEmail(ev.target.value)}/>
                <input type="password"
                   placeholder="Password"
                   value={password}
                   onChange={ev=>setPassword(ev.target.value)}/>
                <button type="submit" className="login">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already Registered <Link className="underline text-black" to={'/login'}>Login</Link>
                </div>

            </form>
            </div>
        </div>
    )
}


export default RegisterPage