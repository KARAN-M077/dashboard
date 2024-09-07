// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import StudentDetails from './Components/widgets/Student.page.details';
import StudentPlacement from './Components/widgets/Student.placement.details';
import CompanyDetail from './Components/widgets/Company.details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />}>
          <Route path="studentdetails" element={<StudentDetails />} />
          <Route path="studentplacementdetails" element={<StudentPlacement />} />
          <Route path="/dashboard/studentplacement/company/:companyId" element={<CompanyDetail/>} />
        </Route>
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
