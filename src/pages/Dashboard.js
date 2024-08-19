import React from 'react';
import { useLocation } from 'react-router-dom';
import CalendarPage from './CalendarPage';
import KanbanPage from './employee/KanbanPage';

const Dashboard = () => {
  const location = useLocation();
  const isEmployee = location.pathname.includes('employee');

  return (
    <div>
      {isEmployee ? (
        <>
          <KanbanPage />
          <CalendarPage />
        </>
      ) : (
        <>
          <CalendarPage />
          {/* Aquí podrías añadir la gráfica de progresión para clientes */}
        </>
      )}
    </div>
  );
};

export default Dashboard;
