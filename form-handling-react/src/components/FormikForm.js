import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Submitting:', values);
    // API call would go here
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              style={{ width: '100%', padding: '0.5rem' }}
            />
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none' }}
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
