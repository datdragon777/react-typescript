import Routers from './router/Routers.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toast } from '@components';
import { useEffect, useState } from 'react';
import { Layout } from '@layouts';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const handleShowToast = (message: string, type: string) => {
    setToastMessage(message);
    setToastType(type);
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      setToastMessage('');
      setToastType('');
    }, 4000);

    return () => clearTimeout(timeout);
  }, [setToastMessage, setToastType]);

  return (
    <Router>
      <Layout>
        <Routers onShowToast={handleShowToast} />
        {toastMessage && <Toast message={toastMessage} type={toastType} />}
      </Layout>
    </Router>
  );
}

export default App;
