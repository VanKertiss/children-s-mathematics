import { Routes, Route } from 'react-router-dom';
import HS from './App.module.css';

import Authorized from '../Authorized/Authorized';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HelloPage from '../HelloPage/HelloPage';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';

const App:React.FC = () => {
  return (
    <div className={HS.container}>
      <Header />
      <div className={HS.mainContent}>
        <Navigation />
      <Routes>
        <Route path='/' element={<HelloPage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/authorized' element={<Authorized />} />
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
