import {Link} from "react-router-dom";

function RegisterPage(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-3xl text-center ">Register</h1>
            <form className="max-w-md mx-auto border">
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="Password"/>
                <button className="login">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already Registered <Link className="underline text-black" to={'/login'}>Login</Link>
                </div>

            </form>
            </div>
        </div>
    )
}


export default RegisterPage