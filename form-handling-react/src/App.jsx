import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Form Handling Demo</h1>
      <h2>Controlled Component</h2>
      <RegistrationForm />
      
      <h2 style={{ marginTop: '2rem' }}>Formik Version</h2>
      <FormikForm />
    </div>
  );
}

export default App;
