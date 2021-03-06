import { Routes, Route } from 'react-router-dom';
import HS from './App.module.css';

import Authorized from '../Authorized/Authorized';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HelloPage from '../HelloPage/HelloPage';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import Registartion from '../Registration/Registartion';

const App:React.FC = () => {

  const authorized = false;

  return (
    <div className={HS.container}>
      <Header />
      <div className={HS.mainContent}>
       {authorized ? <Navigation /> : <></>}
        
      <Routes>
        <Route path='/' element={<HelloPage />} />
        <Route path='/main' element={<Main />} />
        <Route path='/authorized' element={<Authorized />} />
        <Route path='/registration' element={<Registartion />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
