import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loginanimation from '../../assets/Animation/Animation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.studentId) {
      navigate('/dashboard'); 
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://devsquad-api.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log('Response Status:', response.status);
      console.log('Response Headers:', [...response.headers]);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userData', JSON.stringify(data.data));
        console.log(data.data);
        navigate('/dashboard'); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='bg-[#F5F3ED] px-16 h-[100vh] flex flex-row-reverse justify-center w-full max850:px-0' style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <div className='w-[50%] h-[90vh] mt-10 bg-[#9cc6fd] rounded-3xl max850:hidden'>
        <Loginanimation />
      </div>
      <div className='text-black gap-8 flex flex-col justify-center w-[43%] max850:w-full'>
        <form onSubmit={handleLogin} className='flex flex-col px-[20%] gap-6 max850:px-[5%]'>
          <h1 className='text-5xl font-semibold text-center text-[#383838]'>Welcome Back</h1>
          <p className='text-center'>Simplify your workflow and boost your productivity with Tuga's App. Get started for free.</p>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'
            required
          />
          {error && <p className='text-red-500 text-center'>{error}</p>}
          <div className='flex justify-center'>
            <button type='submit' className='text-center text-white bg-[#FC661A] rounded-[5px] py-[10px] w-full active:bg-[#D94F12] transition duration-150 ease-in-out text-[18px] max850:w-[100%]'>Login</button>
          </div>
        </form>
        <Link className='text-[#FC661A] underline text-center'>Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
