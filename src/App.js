import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CustomerPanel from './pages/CustomerPanel';
import EmployeePanel from './pages/EmployeePanel';
import Tasks from './pages/employee/Tasks';
import Schedule from './pages/employee/Schedule';
import FileTransfer from './pages/employee/FileTransfer';
import TaskManager from './pages/employee/TaskManager';
import Documents from './pages/employee/Documents';
import Calendar from './pages/employee/Calendar';
import PrivacyNoticePage from './pages/PrivacyNoticePage';

// Importa los componentes para el panel de clientes
import Account from './pages/customer/Account';
import Orders from './pages/customer/Orders';
import NewOrder from './pages/customer/NewOrder';
import Support from './pages/customer/Support';
import Documentation from './pages/customer/Documentation';
import ContactSales from './pages/customer/ContactSales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/privacy-notice" element={<PrivacyNoticePage />} /> {/* Añadimos la ruta */}
        
        {/* Rutas del panel de clientes */}
        <Route path="/customer/*" element={<CustomerPanel />}>
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
          <Route path="new-order" element={<NewOrder />} />
          <Route path="support" element={<Support />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="contact-sales" element={<ContactSales />} />
        </Route>
        
        {/* Rutas del panel de empleados */}
        <Route path="/employee/*" element={<EmployeePanel />}>
          <Route path="tasks" element={<Tasks />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="file-transfer" element={<FileTransfer />} />
          <Route path="task-manager" element={<TaskManager />} />
          <Route path="documents" element={<Documents />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
