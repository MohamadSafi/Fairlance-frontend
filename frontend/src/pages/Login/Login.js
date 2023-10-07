import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AuthWrapper,
  LoginForm,
  InputField,
  Error,
  SubmitButton,
  InputFieldWrapper,
  EyeIcon,
  LoginDetails,
} from './style';
import NavBar from '../../components/NavBar/NavBar';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser } = useContext(AuthContext);

  const { state } = useLocation();

  const handleLogin = (data) => {
    loginUser(data, state);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <NavBar notfixed={true} />
      <AuthWrapper>
        <LoginDetails>
          <h2>Welcome back</h2>
          <p>Please enter your details</p>
          <LoginForm onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor='email'>Email</label>
            <InputField
              type='email'
              id='email'
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
            <InputFieldWrapper>
              <label htmlFor='password'>Password</label>
              <InputField
                type={showPassword ? 'text' : 'password'}
                id='password'
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <EyeIcon onClick={togglePasswordVisibility}>
                {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </EyeIcon>
            </InputFieldWrapper>
            {errors.password && <Error>{errors.password.message}</Error>}
            <SubmitButton type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </SubmitButton>
          </LoginForm>
          <p>
            Don't have an account yet?
            <Link to='/signup' className='move-btn'>
              Signup
            </Link>
            instead.
          </p>
        </LoginDetails>
      </AuthWrapper>
    </div>
  );
};

export default LoginPage;
