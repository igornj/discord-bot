/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyles';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={5000} />
      <Routes />
    </>
  );
}

export default App;
