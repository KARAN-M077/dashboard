import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './Homepage';
import Landing from './components/Home/Landing/Landing';
import Department from './components/Department/Department';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Studentseditdetails from './components/Form/Student.detail.form';
import Home from './components/Pages/Home';
import StudentDetails from './components/widgets/Student.page.details';
import StudentPlacement from './components/widgets/Student.placement.details';
import CompanyDetail from './components/widgets/Company.details';
import { NotificationsProvider, useNotifications } from 'reapop';
import TakeTestPage from './components/TakeTestPage';

function App() {
  return (
    <div>
      <NotificationsProvider>
      <Routes>
        <Route exact path= '/' element={<Homepage/>}/>
        <Route path= '/Landing' element={<Landing/>}/>
        <Route path= '/Department' element={<Department/>}/>
        <Route path= '/Signup' element={<Signup/>}/>
        <Route path= '/Login' element={<Login/>}/>
        <Route path= '/Studentsignup' element={<Studentseditdetails/>}/>
        <Route path="/TakeTestPage" element={<TakeTestPage/>}/>
        <Route path="/dashboard" element={<Home />}>
          <Route path="studentdetails" element={<StudentDetails />} />
          <Route path="studentplacementdetails" element={<StudentPlacement />} />
        </Route>
        <Route path="/company/:companyId" element={<CompanyDetail />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      </NotificationsProvider>
    </div>
  );
}

export default App;
