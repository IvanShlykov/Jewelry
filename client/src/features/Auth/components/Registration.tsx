import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState} from '../../../store/store';
import { useAppDispatch } from '../../../store/store'
import { registration,clear } from '../authSlice';
import type { RegistrationUser } from '../type';


const schema = object().shape({
    name: string().required('Необходимо указать имя'),
    email: string().required('Необходимо указать электронную почту'),
    phone: string().required('Необходимо указать номер телефона'),
    password: string()
      .required('Необходимо указать пароль')
      .min(6, 'Пароль должен быть более 6 символов')
      .max(12, 'Пароль должен быть не более 12 символов'),
    cpassword: string()
      .required('Необходимо подтвердить пароль')
      .min(6, 'Пароль должен быть более 6 символов')
      .max(12, 'Пароль должен быть не более 12 символов')
      .oneOf([ref('password')], 'Пароли не совпадают'),
  });

function Registration ():JSX.Element{

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
  } = useForm<RegistrationUser>({
    resolver: yupResolver(schema),
  });

  const reg:SubmitHandler<RegistrationUser> = (data:RegistrationUser) =>{

    dispatch(registration({name:data.name,email:data.email, phone: data.phone, password:data.password})).catch(console.log)
 

  }

    return (
            <div className='auth'>
  <form onSubmit={handleSubmit(reg)}>
            <input type='text' placeholder='name' {...register('name')}/>
            <span>{errors.name?.message}</span>
            <input type='email' placeholder='email' {...register('email')}/>
            <span>{errors.email?.message}</span>
            <input type='text' placeholder='phone' {...register('phone')}/>
            <span>{errors.phone?.message}</span>
            <input type='password' placeholder='password' {...register('password')}/>
            <span>{errors.password?.message}</span>
            <input type='password' placeholder='cpassword' {...register('cpassword')}/>
            <span>{errors.cpassword?.message}</span>
            <button className='btn' type='submit'>registration</button>
        </form>
        <div>{message}</div>
        </div>
      
    )
}

export default Registration