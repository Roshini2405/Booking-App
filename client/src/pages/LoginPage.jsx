import {Link} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';

function LoginPage(){
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    async function handleloginSubmit(ev){
        ev.preventDefault();
        try{
            await axios.post('/login',{email,password});
            alert("Login Successful");
        }catch(e){
            alert("Login Failed");
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-3xl text-center ">Login</h1>
            <form className="max-w-md mx-auto border" onSubmit={handleloginSubmit}>
                <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev=>setEmail(ev.target.value)} />
                <input type="password" 
                placeholder="Password"
                value={password}
                onChange={ev=>setPassword(ev.target.value)} />
                <button className="login">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register Now</Link>
                </div>

            </form>
            </div>
        </div>
    )
}


export default LoginPage