'use client';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Field is Required'),
    username: Yup.string().max(20, 'Must be 20 characters or less').required('Field is Required'),
    password: Yup.string().max(20, 'Must be 20 characters or less').required('Field is Required'),
  });

export default function Form() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                username: formData.get('username'),
                password: formData.get('password'),
            }),
        });
        console.log({ response })
    };

    return(
    
    <Formik
      initialValues={{ email: '', username: '', password: '' }}
      validationSchema={validationSchema}
      
    >
    
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
        <label>Email:</label>
        <Field name="email" className="border border-black text-black" maxLength = {50} type="email" />
        <ErrorMessage name="email" component="div" />
        <label>Username:</label>
        <Field name="username" className="border border-black text-black" maxLength = {50} type="username" />
        <ErrorMessage name="username" component="div" />
        <label>Password:</label>
        <Field name="password" className="border border-black text-black" maxLength = {50} type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </form>
    </Formik>
    )
}