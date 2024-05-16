import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import { registration, clear } from '../authSlice';
import type { RegistrationUser } from '../type';
import { initBasket } from '../../Basket/basketSlice';

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

function Registration({onClose}:{onClose:()=> void}): JSX.Element {
  const dispatch = useAppDispatch();
  const message = useSelector((store: RootState) => store.authState.error);
  const user = useSelector((store: RootState) => store.authState.user);
  useEffect(() => {

    if (message) {
      setTimeout(() => {
        dispatch(clear());
      }, 2000);
    }
  }, [user, message,]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationUser>({
    resolver: yupResolver(schema),
  });

  const reg: SubmitHandler<RegistrationUser> = (data: RegistrationUser) => {
    dispatch(
      registration({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
      }),
    ).catch(console.log);
    onClose()
  };

  return (
    <div className="authCont">
      <div className="auth">
        <form onSubmit={handleSubmit(reg)} className="authForm">
          <input className="inputAuth" type="text" placeholder="Имя" {...register('name')} />
          <span className="eroorMessageAuth">{errors.name?.message}</span>
          <input className="inputAuth" type="email" placeholder="email" {...register('email')} />
          <span className="eroorMessageAuth">{errors.email?.message}</span>
          <input className="inputAuth" type="text" placeholder="Телефон" {...register('phone')} />
          <span className="eroorMessageAuth">{errors.phone?.message}</span>
          <input
            className="inputAuth"
            type="password"
            placeholder="Пароль"
            {...register('password')}
          />
          <span className="eroorMessageAuth">{errors.password?.message}</span>
          <input
            className="inputAuth"
            type="password"
            placeholder="Повторить пароль"
            {...register('cpassword')}
          />
          <span className="eroorMessageAuth">{errors.cpassword?.message}</span>
          <button className="btnAuth" type="submit">
            Зарегестрироваться
          </button>
        </form>
        <div>{message}</div>
      </div>
    </div>
  );
}

export default Registration;
