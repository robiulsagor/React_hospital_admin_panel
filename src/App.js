import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import './Main.scss';
import Appoinments from './pages/Appoinments';
import Doctors from './pages/Doctors';
import NotFound from './pages/NotFound';
import Patients from './pages/Patients';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Departments from './pages/Departments';
import Dashboard from './pages/Dashboard';


function App() {
  const [leftClosed, setLeftClosed] = useState(false)
  return (
    <div className='app_header'>
      <Topbar leftClosed={leftClosed} setLeftClosed={setLeftClosed} />
      <div className='main-container'>
        <SideBar leftClosed={leftClosed} setLeftClosed={setLeftClosed} />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/appointments' element={<Appoinments />} />
          <Route path='/patients' element={<Patients />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
