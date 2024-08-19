const roles = {
    admin: ['tasks', 'schedule', 'file-transfer', 'task-manager', 'documents', 'calendar'],
    manager: ['tasks', 'schedule', 'task-manager', 'documents'],
    employee: ['tasks', 'schedule', 'documents'],
  };
  
  export const getUserRole = (userId) => {
    // Simulación: determinar el rol según el userId
    if (userId === 1) return 'admin';
    if (userId === 2) return 'manager';
    return 'employee';
  };
  
  export const getPermissions = (role) => {
    return roles[role] || [];
  };
  