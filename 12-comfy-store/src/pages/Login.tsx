// Login.tsx
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { FormInput, SubmitBtn } from "../components/";
import { customFetch } from "../api/httpAdapter";
import { loginUser } from "../redux/features/user/userSlice";
import { ActionParams, ErrorResponse, LoginData, LoginResponse } from "../api/types";

export const action = (store: Store) => async ({ request }: ActionParams) => {
  const formData = await request.formData();
  
  const data: LoginData = {
    identifier: formData.get('identifier') as string,
    password: formData.get('password') as string,
  };

  try {
    // Asegúrate de que el tipo de respuesta es LoginResponse
    const response = await customFetch.post<LoginData, LoginResponse>('/auth/local', data);
    store.dispatch(loginUser(response)); // Aquí debería ser response (LoginResponse)
    toast.success('Logged in successfully');
    return redirect('/');
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorMessage =
      errorResponse.response?.data?.error?.message ||
      'Please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      // Asegúrate de que el tipo del response aquí sea correcto
      const response = await customFetch.post<LoginData, LoginResponse>('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response)); // Aquí debería ser response (LoginResponse)
      toast.success('Welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Guest user login error. Please try again');
    }
  };
  
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='Email' name='identifier' />
        <FormInput type='password' label='Password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='Login' />
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}
