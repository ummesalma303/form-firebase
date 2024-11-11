import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        loginUser(email, password)
        .then(result => {
            console.log(result)
            })
            .catch(error => {
            console.log("ERROR",error.message)
          })
    }
    return (
        <div className='my-9'>
        <h1 className='text-center text-2xl underline my-3'>Login Now!</h1>
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
  <form onSubmit={handleLogin} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button type='submit' className="btn btn-primary">Login</button>
    </div>
  </form>
</div>
    </div>
    );
};

export default Login;