import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

export default function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // API call would go here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="span" />
        </div>
        {/* Repeat for email and password */}
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
