import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthWrapper, InputField, Error, SubmitButton, InputFieldWrapper, EyeIcon } from './style';
import { SignupForm, SignupDetails } from './style';
import NavBar from '../../components/NavBar/NavBar';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (data) => {
    registerUser(data);
  };

  return (
    <div>
      <NavBar notfixed={true} />
      <AuthWrapper>
        <SignupDetails>
          <h2>Sign Up</h2>
          <p>It's quick and easy</p>
          <SignupForm onSubmit={handleSubmit(handleSignup)}>
            {/* Signup form fields */}
            <label htmlFor='First Name'>First Name</label>
            <InputField
              id='firstname'
              type={'text'}
              placeholder=''
              {...register('firstname', {
                required: 'First Name is Required',
              })}
            />
            {errors.firstname && <Error>{errors.firstname.message}</Error>}
            <label htmlFor='First Name'>Last Name</label>
            <InputField
              id='lastname'
              type={'text'}
              placeholder=''
              {...register('lastname', {
                required: 'Last Name is required',
              })}
            />
            {errors.lastname && <Error>{errors.lastname.message}</Error>}
            <label htmlFor='email'>Email</label>
            <InputField
              type='email'
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
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

            <label htmlFor='confirm-password'>Confirm Password</label>
            <InputField
              type={showPassword ? 'text' : 'password'}
              id='confirm-password'
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === getValues('password') || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
            <SubmitButton type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </SubmitButton>
          </SignupForm>
          <p>
            Already have an account?
            <Link to='/login' className='move-btn'>
              Login
            </Link>
            instead.
          </p>
        </SignupDetails>
      </AuthWrapper>
    </div>
  );
};

export default LoginPage;
