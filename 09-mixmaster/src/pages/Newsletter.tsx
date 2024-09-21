import axios from 'axios';
import { toast } from 'react-toastify';
import { redirect, ActionFunction, useNavigation, Form } from 'react-router-dom';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

// Definimos el tipo de la función `action`, que es del tipo `ActionFunction`
export const action: ActionFunction = async ({ request }) => {
  try {
    // Obtenemos los datos del formulario y los convertimos en un objeto
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()); // Añadimos `.entries()` para evitar advertencias de tipo

    // Realizamos la petición POST con axios
    const response = await axios.post(newsletterUrl, data);

    // Mostramos un mensaje de éxito
    toast.success(response.data.msg);

    // Redireccionamos al usuario
    return redirect('/');
  } catch (error: any) {
    // En caso de error, mostramos el mensaje de error (si está disponible)
    console.error(error);
    toast.error(error?.response?.data?.msg || 'An error occurred');
    
    // Retornamos el error para su manejo posterior
    return error;
  }
};


export const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          required
        />
      </div>
      {/* lastName */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          required
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
          required
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  );
};
