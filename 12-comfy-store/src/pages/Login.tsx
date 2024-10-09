import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { FormInput, SubmitBtn } from "../components/";
import { customFetch } from "../api/httpAdapter";
import { loginUser } from "../redux/features/user/userSlice";
import { ActionParams, LoginResponse, User } from "../api/types";

export const action = (store: Store) => async ({ request }: ActionParams) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post<LoginResponse, { data: LoginResponse }>('/auth/local', data);
    store.dispatch(loginUser(response.data));
    toast.success('logged in successfully');
    return redirect('/');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};


export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      // Especificar el tipo del response aquí
      const response = await customFetch.post<{ identifier: string; password: string }, { user: User; jwt: string }>('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again');
    }
  };
  
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='email' name='identifier' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}
