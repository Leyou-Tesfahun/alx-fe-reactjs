import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        alert("Registration successful (Formik)!");
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Username: </label>
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Email: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password: </label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
