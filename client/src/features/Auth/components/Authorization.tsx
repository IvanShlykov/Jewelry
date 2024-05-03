import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState} from '../../../store/store';
import { useAppDispatch } from '../../../store/store'
import {clear, authorization } from '../authSlice';
import type { AuthForm } from '../type';


const schema = object().shape({
    email: string().required('Необходимо указать электронную почту'),
    password: string().required('Необходимо указать пароль')
  });

function Authorization ():JSX.Element{

    const dispatch = useAppDispatch()
    const message = useSelector((store:RootState)=>store.authState.error)
    const user = useSelector((store:RootState)=>store.authState.user)
const navigate = useNavigate()
    useEffect(()=>{
if(user){
navigate('/')
}

if(message){
    setTimeout(()=>{
        dispatch(clear())
    },2000)
}
    },[user,message])

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(schema),
  });

  const auth:SubmitHandler<AuthForm> = (data:AuthForm) =>{
    dispatch(authorization({email:data.email, password:data.password})).catch(console.log)
 

  }

    return (
            <div className='auth'>
  <form onSubmit={handleSubmit(auth)}>
            <input type='email' placeholder='email' {...register('email')}/>
            <span>{errors.email?.message}</span>
            <input type='password' placeholder='password' {...register('password')}/>
            <span>{errors.password?.message}</span>
            <button className='btn' type='submit'>authorization</button>
        </form>
        <div>{message}</div>
        </div>
      
    )
}

export default Authorization