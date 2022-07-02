import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Main from '../Main/Main';
import HS from './App.module.css';

function App() {
  return (
    <div className={HS.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
