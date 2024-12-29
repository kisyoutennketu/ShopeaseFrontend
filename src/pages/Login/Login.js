import React, { useCallback, useState } from 'react'
import GoogleSignIn from '../../components/Buttons/GoogleSignIn'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Login = () => {

  const [values, setValues] = useState({
    userName: '',
    password: ''
  });

  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Values ",values)
  }, [values]);

  const handleOnChange = useCallback((e) => {
    e.persist();
    setValues(values => ({
      ...values,
      [e.target.name]:e.target?.value,
    }))

  },[]);



  return (
    <div className='px-8 w-[340px]'>
      <p className='text-3xl font-bold pb-4 pt-4'>Sign In</p>
      <GoogleSignIn />
      <p className='text-gray-500 items-center text-center w-full py-2'>OR</p>

      <div className='pt-4'>
        <form onSubmit={onSubmit}>
          <input type='email' name='userName' value={values?.userName} onChange={handleOnChange} placeholder='Email address' className='h-[48px] w-full border p-2 border-gray-400' required/>
          <input type='password' name='password' value={values?.password} onChange={handleOnChange} placeholder='Password' className='h-[48px] mt-8 w-full border p-2 border-gray-400' required autoComplete='new-password'/>
          <Link className='text-right w-full float-right underline pt-2 text-gray-500 hover:text-black' >Forgot Password?</Link>
          <button className='border w-full rounded-lg h-[48px] bg-black text-white mt-4 hover:opacity-80 '>Sing In</button>
        </form>
      </div>
    </div>
  )
}

export default Login