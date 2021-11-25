/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyles';

import Routes from './routes';
// import History from '';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ToastContainer autoClose={5000} />
      <Routes />
    </AuthProvider>
  );
}

export default App;
